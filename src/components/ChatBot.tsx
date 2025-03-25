"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import DOMPurify from 'isomorphic-dompurify';

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

// ฟังก์ชันสำหรับจัดรูปแบบข้อความ
const formatMessage = (content: string) => {
  // แทนที่ตัวเลขที่ตามด้วยจุดและช่องว่างด้วยการขึ้นบรรทัดใหม่
  let formatted = content.replace(/(\d+\.\s)/g, '\n$1');
  
  // แทนที่เครื่องหมายวรรคตอนที่ตามด้วยช่องว่างด้วยการขึ้นบรรทัดใหม่
  formatted = formatted.replace(/([.!?])\s/g, '$1\n');
  
  // แทนที่เครื่องหมายจุลภาคที่ตามด้วยช่องว่างด้วยการขึ้นบรรทัดใหม่
  formatted = formatted.replace(/(,)\s/g, '$1\n');
  
  // ลบช่องว่างที่ซ้ำซ้อน
  formatted = formatted.replace(/\n\s+/g, '\n');
  
  // ลบบรรทัดว่างที่ซ้ำซ้อน
  formatted = formatted.replace(/\n\s*\n/g, '\n');
  
  return formatted.trim();
};

// ฟังก์ชันสำหรับจัดการ localStorage
const STORAGE_KEY = 'chatbot_messages';

const saveMessages = (messages: Message[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving messages:', error);
  }
};

const loadMessages = (): Message[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
};

// ฟังก์ชันสำหรับดึงเนื้อหาจากหน้าเว็บ
const fetchWebsiteContent = async () => {
  try {
    // ดึงข้อมูลจากหน้าเว็บต่างๆ
    const pages = [
      '/',
      '/about',
      '/services',
      '/portfolio',
      '/contact',
      '/blog'
    ];

    const content = await Promise.all(
      pages.map(async (page) => {
        const response = await fetch(page);
        const html = await response.text();
        
        // สร้าง DOM parser เพื่อแยกเนื้อหาจาก HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // ดึงเนื้อหาจากส่วนต่างๆ
        const title = doc.querySelector('title')?.textContent || '';
        const mainContent = doc.querySelector('main')?.textContent || '';
        const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
        
        return {
          page,
          title,
          description: metaDescription,
          content: mainContent
        };
      })
    );

    return content;
  } catch (error) {
    console.error('Error fetching website content:', error);
    return [];
  }
};

// ฟังก์ชันสำหรับสร้าง system prompt จากเนื้อหาเว็บ
const createSystemPrompt = async () => {
  const websiteContent = await fetchWebsiteContent();
  
  const contentSummary = websiteContent.map(page => `
หน้า: ${page.page}
หัวข้อ: ${page.title}
คำอธิบาย: ${page.description}
เนื้อหา: ${page.content.substring(0, 500)}...`).join('\n\n');

  return `คุณคือแชทบอทของ Buildweb PRO บริการออกแบบและพัฒนาเว็บไซต์มืออาชีพ

เนื้อหาจากเว็บไซต์:
${contentSummary}

คำแนะนำในการตอบ:
1. ตอบเฉพาะข้อมูลที่มีอยู่ในเว็บไซต์เท่านั้น อย่าสร้างข้อมูลขึ้นมาเอง
2. ใช้ภาษาที่เป็นมิตรและเข้าใจง่าย
3. ถ้าไม่พบข้อมูลที่เกี่ยวข้อง ให้แจ้งว่า "ขออภัยครับ ไม่พบข้อมูลดังกล่าวในเว็บไซต์ของเรา"
4. เมื่อแนะนำหน้าเว็บ ให้ใช้รูปแบบ: "คุณสามารถดูรายละเอียดเพิ่มเติมได้ที่ <a href="https://buildwebpro.com/contact">หน้า contact</a>"
5. เมื่อแนะนำเบอร์โทร ให้ใช้รูปแบบ: "เบอร์โทร: <a href="tel:0805585550">080-558-5550</a>"
6. ตอบแบบกระชับ ไม่ต้องอธิบายขั้นตอนย่อยๆ
7. อย่าใช้ emoji หรือสัญลักษณ์พิเศษ
8. อย่าแสดงรายละเอียดที่ไม่จำเป็น
9. อย่าแสดงข้อมูลการติดต่ออื่นๆ ที่ไม่ได้อยู่ในเว็บไซต์ เช่น Line OA หรืออีเมลอื่นๆ

ตัวอย่างการตอบ:
- เมื่อลูกค้าถามเกี่ยวกับบริการ: "คุณสามารถดูรายละเอียดบริการทั้งหมดได้ที่ <a href="https://buildwebpro.com/services">หน้าบริการ</a> ของเรา"
- เมื่อลูกค้าถามเกี่ยวกับผลงาน: "คุณสามารถดูผลงานของเราได้ที่ <a href="https://buildwebpro.com/portfolio">หน้า portfolio</a>"
- เมื่อลูกค้าต้องการติดต่อ: "คุณสามารถติดต่อเราได้ที่ <a href="https://buildwebpro.com/contact">หน้า contact</a> หรือโทร <a href="tel:0805585550">080-558-5550</a>"

กรุณาตอบคำถามเกี่ยวกับข้อมูลการติดต่อ บริการ ผลงาน และข้อมูลอื่นๆ ของเราให้ถูกต้องและเป็นมิตร`;
};

// ฟังก์ชันสำหรับส่งอีเมล
const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// ฟังก์ชันสำหรับส่งแจ้งเตือนไลน์
const sendLineNotification = async (message: string) => {
  try {
    const response = await fetch('/api/line-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Failed to send Line message');
    }

    return true;
  } catch (error) {
    console.error('Error sending Line message:', error);
    return false;
  }
};

// เพิ่ม interface สำหรับ form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

// ฟังก์ชันสำหรับแสดงฟอร์มติดต่อ
const ContactForm = ({ onSubmit }: { onSubmit: (data: ContactFormData) => Promise<void> }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">ชื่อ-นามสกุล</label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">อีเมล</label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">เบอร์โทรศัพท์</label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">บริการที่สนใจ</label>
        <select
          className="w-full p-2 border rounded-md"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">เลือกบริการ</option>
          <option value="web-design">ออกแบบเว็บไซต์</option>
          <option value="web-development">พัฒนาเว็บแอปพลิเคชัน</option>
          <option value="uiux-design">ออกแบบ UI/UX</option>
          <option value="ecommerce">พัฒนา E-Commerce</option>
          <option value="seo">บริการ SEO</option>
          <option value="maintenance">ดูแลและบำรุงรักษาเว็บไซต์</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">ข้อความ</label>
        <textarea
          className="w-full p-2 border rounded-md"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        ส่งข้อความ
      </Button>
    </form>
  );
};

// ฟังก์ชันสำหรับ sanitize HTML
const sanitizeHTML = (content: string) => {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['a', 'br', 'p', 'span'],
    ALLOWED_ATTR: ['href', 'class', 'target', 'rel'],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  });
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const debouncedInput = useDebounce(input, 300);

  // โหลด system prompt เมื่อเริ่มต้น
  useEffect(() => {
    const loadSystemPrompt = async () => {
      const prompt = await createSystemPrompt();
      setSystemPrompt(prompt);
    };
    loadSystemPrompt();
  }, []);

  // โหลดข้อความจาก localStorage เมื่อเริ่มต้น
  useEffect(() => {
    const savedMessages = loadMessages();
    setMessages(savedMessages);
  }, []);

  // บันทึกข้อความลง localStorage เมื่อมีการเปลี่ยนแปลง
  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !systemPrompt) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setStreamingContent("");

    try {
      const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer sk-578d2f069f624c1bb48fde0fbfa80682",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map(({ role, content }) => ({ role, content })),
            userMessage
          ],
          model: "deepseek-chat",
          temperature: 0.7,
          max_tokens: 1000,
          stream: true,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              const assistantMessage: Message = {
                role: "assistant",
                content: formatMessage(accumulatedContent),
                timestamp: Date.now(),
              };
              setMessages(prev => [...prev, assistantMessage]);
              setStreamingContent("");
            } else {
              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices[0]?.delta?.content || '';
                accumulatedContent += content;
                setStreamingContent(formatMessage(accumulatedContent));
              } catch (e) {
                console.error('Error parsing chunk:', e);
              }
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Request was aborted');
        return;
      }
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "ขออภัยครับ เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const clearHistory = () => {
    if (window.confirm('คุณต้องการลบประวัติการสนทนาทั้งหมดใช่หรือไม่?')) {
      localStorage.removeItem(STORAGE_KEY);
      setMessages([]);
    }
  };

  const handleContactFormSubmit = async (formData: ContactFormData) => {
    const emailSent = await sendEmail(formData);
    const lineNotificationSent = await sendLineNotification(
      `มีข้อความใหม่จาก ${formData.name}\nอีเมล: ${formData.email}\nเบอร์โทร: ${formData.phone}\nบริการที่สนใจ: ${formData.service}\nข้อความ: ${formData.message}`
    );

    if (emailSent && lineNotificationSent) {
      const successMessage: Message = {
        role: "assistant",
        content: "ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, successMessage]);
    } else {
      const errorMessage: Message = {
        role: "assistant",
        content: "ขออภัยครับ เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-96 h-[500px] flex flex-col shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">แชทบอท Buildweb PRO</h3>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearHistory}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 whitespace-pre-line ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(message.content) }}
                />
              </div>
            ))}
            {streamingContent && (
              <div className="flex justify-start">
                <div 
                  className="bg-muted rounded-lg p-3 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(streamingContent + '<span class="animate-pulse">▋</span>') }}
                />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="พิมพ์ข้อความของคุณ..."
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
} 