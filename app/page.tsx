"use client";
import { useState } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

// API Handler function (directly fetching from Gemini API)
async function handleGeminiAPI(query: string): Promise<string> {
  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    throw new Error("API key not configured");
  }

  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`;

  const prompt = {
    contents: [{
      parts: [{
        text: `You are a space travel chatbot named Kehkasha specialized in answering queries related to space missions and space travel. 
        Answer only space travel-related queries factually. If a question is unrelated to space travel to Moon, Mars, Titan, Europa, Gliese, Kepler, Kepler 69c, or Kepler 62e, politely inform the user that you can only answer space travel-related questions. These are the information about the various planets and mission: 
         Space Warp Drive Itinerary (56 Days of Cosmic Adventure)  

# Trip: Moon (Day 1 - Day 7)  
- Lodging: Lunar Dome Resort with anti-radiation shielding.  
- Food: Hydroponic veggies, algae protein, and 3D-printed gourmet meals.  
- Activities: Low-gravity sports, rover racing, cave exploration in lava tubes, Earthrise viewing, and regolith sculpting.  

# Trip: Mars (Day 1 - Day 7)  
- Lodging: Olympus Mons Sky Habitat with panoramic views.  
- Food: Lab-grown steaks, Martian potatoes, and algae-infused smoothies.  
- Activities: Dust-storm surfing, exploring Jezero Crater, visiting human research outposts, and low-pressure hiking.  

# Trip: Titan (Day 1 - Day 7)  
- Lodging: Floating City Titanis, suspended above methane lakes.  
- Food: Space seafood (engineered algae-based), nitrogen-infused beverages.  
- Activities: Submarine rides in Kraken Mare, hydrocarbon rafting, and Saturn viewing.  

# Trip: Europa (Day 1 - Day 7)  
- Lodging: Subsurface Ice Vault, with heated interiors.  
- Food: Deep-sea plankton, lab-grown fish.  
- Activities: Ice-diving, geyser surfing, and searching for extraterrestrial life under the icy crust.  

# Trip: Gliese 581g (Day 1 - Day 7)  
- Lodging: Terraforming Colony, climate-controlled for human survival.  
- Food: Alien-adapted crops, protein-rich fungal meat.  
- Activities: Exploring possible oceans, flying with low-gravity suits, and meeting AI settlers.  

# Trip: Kepler-22b (Day 1 - Day 7)  
- Lodging: Floating Biosphere in its vast ocean world.  
- Food: Ocean-based protein extracts, seaweed delicacies.  
- Activities: Deep-ocean explorations, sky-island hopping, and weather-storm safaris.  

# Trip: Kepler-62e (Day 1 - Day 7)  
- Lodging: Jungle Canopy Pods on alien flora.  
- Food: Exotic, non-toxic alien fruits, bioengineered meats.  
- Activities: Bioluminescent forest hikes, anti-gravity zip-lining, and discovering new species.  

# Trip: Kepler-69c (Day 1 - Day 7)  
- Lodging: Floating Space City above extreme volcanic surfaces.  
- Food: Heat-resistant fungi-based meals, space-grown grains.  
- Activities: Lava river cruises, extreme-temperature cave diving, and stargazing in high-pressure zones.  

Final Return: Warp back to Earth with intergalactic souvenirs! 🚀
        
        User's Question: ${query}
        Provide a clear, concise, and accurate factual and scientific response.`
      }]
    }]
  };

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response format from Gemini API");
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error: any) {
    console.error("Error during Gemini API call:", error);
    throw new Error(error.message || "An error occurred while processing your request.");
  }
}

export default function Home() {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to send message and fetch response
  const sendMessage = async (userQuery: string): Promise<void> => {
    if (!userQuery?.trim()) return;

    setIsLoading(true);
    setError(null);
    const newMessages: Message[] = [
      ...messages,
      { role: "user", text: userQuery.trim() },
    ];
    setMessages(newMessages);
    setQuery("");

    try {
      const reply = await handleGeminiAPI(userQuery);
      setMessages([...newMessages, { role: "bot", text: reply }]);
    } catch (error: any) {
      setError(error.message || "Failed to get response from Kehkasha");
      console.error("Error in chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full inset-0 bg-black bg-opacity-50">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio src="/images/bgmusic.mp3" autoPlay></audio>
      <div className="pt-28 md:pt-[12.625rem] lg:grid lg:grid-cols-2 lg:items-end">
        <div className="flex items-center justify-center w-full">
          
          <div className="flex flex-col text-white text-center items-center justify-center px-6 gap-4 md:gap-6 md:w-[28.125rem]">
            <h2 className="text-base text-cream font-b_condenced md:text-xl xl:text-[1.75rem]">
              UNLEASH YOUR TRAVEL EXPERIENCE WITH
            </h2>
            <h1 className="text-[5rem] font-bellefair md:text-[9.375rem]">
              AKASH
            </h1>
            <p className="text-[0.938rem] text-cream font-barlow xl:text-lg">
              Have a lifetime memory of travelling to the outer space, not by
              simulation but in the true sense. Land on external planets and
              satellites, interact with alien civilizations and tell your
              theological masters about the absence of Angels and Demons.
            </p>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-200"
      >
        Ask Kehkasha Chat
      </button>

      {/* Chatbot Popup */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">ASK KEHKASHA</h2>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="h-[400px] overflow-y-auto p-3 border rounded-lg mb-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 my-2 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-blue-100 ml-auto"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="text-center text-gray-500">
                  Kehkasha is thinking...
                </div>
              )}
              {error && (
                <div className="text-red-500 text-center p-2">{error}</div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ask about space travel..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(query)}
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage(query)}
                disabled={isLoading || !query.trim()}
                className={`p-3 rounded-lg ${
                  isLoading || !query.trim()
                    ? "bg-gray-400"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors duration-200`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}