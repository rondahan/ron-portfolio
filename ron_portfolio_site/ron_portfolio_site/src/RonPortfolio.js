
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RonPortfolio() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for your message! Ron will get back to you soon.", from: "bot" }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">Ron Dahan</h1>
          <p className="text-lg text-gray-700">Developer | DevOps | Product Manager | Data Analyst</p>
        </header>

        <section>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-blue-700">About Me</h2>
              <p>
                I’m a versatile and experienced tech professional with an M.Sc. and B.Sc. in Computer Science.
                I have extensive hands-on experience in development, IT infrastructure, product management,
                and data analytics. I bring a unique combination of technical depth and strategic insight.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-blue-700">Experience Highlights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Led a secure e-commerce development project during my final year B.Sc. studies.</li>
                <li>Built automation systems in the IDF for over 1,000 users, doubling efficiency.</li>
                <li>Worked as a freelance IT specialist handling network security and system management.</li>
                <li>Conducted academic data science projects using Python, Pandas, and data visualization tools.</li>
                <li>Experience in customer-facing sales and consulting, with a strong focus on user needs.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-blue-700">Contact Me</h2>
              <div className="space-y-2">
                <p>Email: <a href="mailto:rondahan124@gmail.com" className="text-blue-600">rondahan124@gmail.com</a></p>
                <p>Phone: <a href="tel:+972523655735" className="text-blue-600">+972-52-3655735</a></p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Ask Me Anything</h2>
              <div className="space-y-3">
                <div className="space-y-2 max-h-60 overflow-y-auto bg-white rounded p-3 border border-gray-200">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={msg.from === "user" ? "text-right" : "text-left text-blue-600"}>
                      <p className="inline-block bg-gray-100 px-3 py-2 rounded-md max-w-xs">{msg.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-grow"
                  />
                  <Button onClick={sendMessage}>Send</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
