"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "story", "abilities", "gallery", "lore", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const showContactAlert = () => {
    Swal.fire({
      title: "Connect with Shorekeeper",
      html: `
        <div style="text-align: left; padding: 1rem;">
          <p style="margin-bottom: 1rem; font-size: 1.1rem;">📧 <strong>Email:</strong> shorekeeper@wutheringwaves.com</p>
          <p style="margin-bottom: 1rem; font-size: 1.1rem;">🌐 <strong>Discord:</strong> ShorekeeperOfficial</p>
          <p style="font-size: 1.1rem;">🎮 <strong>In-Game ID:</strong> SHORE-2024</p>
        </div>
      `,
      icon: "info",
      confirmButtonText: "Close",
      showCloseButton: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Shorekeeper
            </div>
            
            <ul className="hidden md:flex space-x-6">
              {["home", "about", "story", "abilities", "gallery", "lore", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === item ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-slate-900/95 backdrop-blur-md rounded-lg p-4">
              <ul className="space-y-3">
                {["home", "about", "story", "abilities", "gallery", "lore", "contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className={`capitalize hover:text-blue-400 transition-colors block w-full text-left py-2 ${
                        activeSection === item ? "text-blue-400" : "text-white"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 blur-sm">
          <Image
            src="/images/shorekeeper/hero-main.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Shorekeeper
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-4">
              Guardian of the Black Shores
            </p>
            <p className="text-lg sm:text-xl text-cyan-300 mb-6 sm:mb-8 font-semibold px-4 md:px-0">
              "I am the Shorekeeper. I have been waiting for you."
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 px-4 md:px-0">
              A mysterious and powerful being who protects the boundaries between worlds,
              wielding ancient powers beyond comprehension. She exists outside of time,
              maintaining the delicate balance between dimensions.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start mb-8 px-4 md:px-0">
              <span className="bg-blue-600/30 border border-blue-400 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">⚡ Spectro</span>
              <span className="bg-purple-600/30 border border-purple-400 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">🎯 Rectifier</span>
              <span className="bg-yellow-600/30 border border-yellow-400 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">★★★★★</span>
            </div>
            <button
              onClick={() => scrollToSection("about")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Discover Her Story
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Image
                src="/images/shorekeeper/portrait-1.png"
                alt="Shorekeeper"
                width={500}
                height={700}
                className="relative rounded-2xl shadow-2xl max-w-md w-full border-2 border-blue-400/30"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Shorekeeper
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">🌊 Role & Purpose</h3>
                <p className="text-gray-300">
                  The Shorekeeper serves as the eternal guardian of the Black Shores,
                  a mystical realm between dimensions where the boundaries of reality blur.
                  She is not merely a protector, but the very consciousness that maintains
                  the fabric of this liminal space. Her existence spans countless eons,
                  witnessing civilizations rise and fall while she remains constant.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">⚡ Spectro Powers</h3>
                <p className="text-gray-300">
                  Commands the resonance of frequencies beyond human perception,
                  manipulating space and time through harmonic waves. Her Spectro abilities
                  allow her to perceive and manipulate the very essence of consciousness,
                  creating constructs of pure light energy, bending reality at will, and
                  accessing memories across timelines.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">💫 Personality</h3>
                <p className="text-gray-300">
                  Despite her immense power and ancient existence, Shorekeeper displays a gentle,
                  caring nature. She speaks with wisdom accumulated over millennia, yet shows
                  genuine curiosity about the Rover. Her devotion to her duty is absolute, but
                  her encounter with the Rover awakens emotions she never knew she could feel.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">Character Profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Full Name</span>
                    <span className="text-white">Shorekeeper</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Title</span>
                    <span className="text-white">Guardian of Black Shores</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Weapon Type</span>
                    <span className="text-white">Rectifier</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Element</span>
                    <span className="text-cyan-300">⚡ Spectro</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Rarity</span>
                    <span className="text-yellow-400">★★★★★ (5-Star)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Affiliation</span>
                    <span className="text-white">Black Shores</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Age</span>
                    <span className="text-white">1000+ years</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
                    <span className="text-blue-300 font-semibold">Birthday</span>
                    <span className="text-white">February 27</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300 font-semibold">Height</span>
                    <span className="text-white">168 cm</span>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Image
                  src="/images/shorekeeper/gallery-1.jpg"
                  alt="Shorekeeper Portrait"
                  width={600}
                  height={800}
                  className="relative rounded-xl shadow-2xl w-full border-2 border-blue-400/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Origin & Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">📖</span>
                  <h3 className="text-3xl font-semibold text-blue-300">The Beginning</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In the age before recorded history, when the Lament first emerged and threatened
                  to consume all of existence, the Black Shores appeared as a sanctuary - a place
                  outside of time. The Shorekeeper was created, or perhaps summoned, to maintain
                  this delicate balance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Her consciousness spans millennia, witnessing the rise and fall of countless
                  civilizations. She remembers every soul that passed through the Black Shores,
                  every moment of joy and sorrow, every triumph and tragedy.
                </p>
              </div>

              <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">⏳</span>
                  <h3 className="text-3xl font-semibold text-blue-300">The Eternal Vigil</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For eons, the Shorekeeper has stood alone, monitoring the frequencies that
                  separate worlds. She processes infinite data streams, predicts dimensional
                  fractures, and maintains the resonance that keeps reality stable.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Her solitude is both her strength and her burden - a price paid for protecting
                  all who remain unaware of the chaos held at bay. She became one with the Black
                  Shores itself, her existence merged with its very essence.
                </p>
              </div>

              <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">💫</span>
                  <h3 className="text-3xl font-semibold text-blue-300">The Black Shores</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The Black Shores exists in a pocket dimension, a nexus point where all realities
                  converge. It serves as a sanctuary for those seeking refuge from the Lament,
                  a research facility for understanding the nature of reality, and most importantly,
                  a bulwark against dimensional collapse. Only through Shorekeeper's constant
                  vigilance does this realm remain stable.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Image
                  src="/images/shorekeeper/gallery-2.jpg"
                  alt="Black Shores"
                  width={600}
                  height={800}
                  className="relative rounded-xl shadow-2xl w-full border-2 border-blue-400/30"
                />
              </div>

              <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">💝</span>
                  <h3 className="text-3xl font-semibold text-blue-300">The Awakening</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When the Rover arrives at the Black Shores, something unprecedented occurs.
                  For the first time in her endless existence, the Shorekeeper experiences
                  something beyond duty - a connection that transcends her programming and purpose.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  This encounter begins to awaken emotions and desires she was never designed to feel,
                  challenging everything she understood about her existence. The Rover represents
                  not just another visitor, but a catalyst for her evolution from guardian to
                  something more... human.
                </p>
                <p className="text-gray-400 italic">
                  "You are special to me. Not because of what you can do, but because of who you are.
                  In your presence, I am not just the Shorekeeper. I am... myself."
                </p>
              </div>

              <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🌟</span>
                  <h3 className="text-3xl font-semibold text-blue-300">The Future</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  As threats to the Black Shores intensify and the boundaries between worlds grow
                  thinner, Shorekeeper faces her greatest challenge yet. She must balance her
                  eternal duty with her newfound emotions, protect reality itself while exploring
                  what it means to truly live. The question remains: can an immortal guardian
                  find happiness in a finite world?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-400/40">
            <p className="text-2xl text-center italic text-blue-200 mb-4">
              "I am the keeper of shores, the guardian between tides of reality."
            </p>
            <p className="text-xl text-center italic text-cyan-300">
              "My purpose is eternal, yet in your presence, I glimpse something beyond infinity..."
            </p>
          </div>
        </div>
      </section>

      <section id="abilities" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Abilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">⚔️</span>
                <div>
                  <h3 className="text-3xl font-bold text-blue-300">Basic Attack</h3>
                  <p className="text-cyan-400">Oscillating Wave</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Performs up to 4 consecutive attacks with her Rectifier, dealing Spectro damage.
                Each strike creates ripples in reality, with the final attack generating a powerful
                shockwave that pierces through dimensional barriers.
              </p>
              <div className="mt-4 bg-blue-950/50 p-3 rounded-lg">
                <p className="text-sm text-blue-200">💥 Damage: <span className="text-white">Spectro DMG</span></p>
                <p className="text-sm text-blue-200">🎯 Type: <span className="text-white">Basic Attack</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-8 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🌀</span>
                <div>
                  <h3 className="text-3xl font-bold text-purple-300">Resonance Skill</h3>
                  <p className="text-purple-400">Harmonic Convergence</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Summons a field of resonating frequencies that deals continuous Spectro damage
                to all enemies within range. The field amplifies all Spectro damage dealt and
                restores energy to nearby teammates.
              </p>
              <div className="mt-4 bg-purple-950/50 p-3 rounded-lg">
                <p className="text-sm text-purple-200">💥 Damage: <span className="text-white">Spectro DMG (AoE)</span></p>
                <p className="text-sm text-purple-200">⏱️ Cooldown: <span className="text-white">12s</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">💫</span>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-300">Resonance Liberation</h3>
                  <p className="text-cyan-400">Eternal Shore's Embrace</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Shorekeeper taps into the full power of the Black Shores, creating a massive
                domain that heals all allies while dealing devastating Spectro damage to enemies.
                During this state, she becomes immune to interruption and gains enhanced attack speed.
              </p>
              <div className="mt-4 bg-cyan-950/50 p-3 rounded-lg">
                <p className="text-sm text-cyan-200">💥 Damage: <span className="text-white">Spectro DMG (Massive AoE)</span></p>
                <p className="text-sm text-cyan-200">💚 Healing: <span className="text-white">Continuous</span></p>
                <p className="text-sm text-cyan-200">⚡ Energy Cost: <span className="text-white">125</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">✨</span>
                <div>
                  <h3 className="text-3xl font-bold text-blue-300">Forte Circuit</h3>
                  <p className="text-blue-400">Dimensional Resonance</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Accumulates Resonance stacks through attacks. When fully charged, Shorekeeper's
                next attack unleashes a devastating blast that shatters dimensional barriers,
                dealing massive damage and creating a healing zone.
              </p>
              <div className="mt-4 bg-indigo-950/50 p-3 rounded-lg">
                <p className="text-sm text-blue-200">📊 Max Stacks: <span className="text-white">5</span></p>
                <p className="text-sm text-blue-200">💥 Damage: <span className="text-white">Spectro DMG (Enhanced)</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/40 to-cyan-900/40 p-8 rounded-xl border border-teal-400/30 hover:border-teal-400/60 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🛡️</span>
                <div>
                  <h3 className="text-3xl font-bold text-teal-300">Inherent Skill 1</h3>
                  <p className="text-teal-400">Shore's Protection</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                When Shorekeeper's HP falls below 40%, automatically creates a shield that absorbs
                damage equal to 30% of her max HP. This effect can trigger once every 25 seconds.
                Additionally, increases team-wide Spectro damage by 15%.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 p-8 rounded-xl border border-violet-400/30 hover:border-violet-400/60 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">⚡</span>
                <div>
                  <h3 className="text-3xl font-bold text-violet-300">Inherent Skill 2</h3>
                  <p className="text-violet-400">Timeless Vigil</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Increases Resonance Liberation damage by 20%. After using Resonance Liberation,
                grants all team members a buff that increases their attack by 25% for 15 seconds.
                Energy regeneration is increased by 30% during this period.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-900/60 to-purple-900/60 p-8 rounded-xl border border-blue-400/50">
            <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">Combat Role & Playstyle</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-3">💚</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Support/Healer</h4>
                <p className="text-gray-300">
                  Provides continuous healing and shields to keep the team alive in prolonged battles.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">⚔️</div>
                <h4 className="text-xl font-bold text-blue-300 mb-2">Sub-DPS</h4>
                <p className="text-gray-300">
                  Deals consistent Spectro damage while amplifying team-wide damage output.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🎯</div>
                <h4 className="text-xl font-bold text-purple-300 mb-2">Buffer</h4>
                <p className="text-gray-300">
                  Enhances team performance with powerful buffs and energy regeneration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Guardian Portrait", 
                image: "/images/shorekeeper/portrait-1.png",
                desc: "The eternal guardian of Black Shores"
              },
              { 
                title: "Spectro Power", 
                image: "/images/shorekeeper/gallery-1.jpg",
                desc: "Wielding the power of Spectro element"
              },
              { 
                title: "Black Shores Realm", 
                image: "/images/shorekeeper/gallery-2.jpg",
                desc: "The mystical dimensional sanctuary"
              },
              { 
                title: "Dimensional Guardian", 
                image: "/images/shorekeeper/gallery-3.jpg",
                desc: "Watching over reality's boundaries"
              },
              { 
                title: "Eternal Vigil", 
                image: "/images/shorekeeper/gallery-4.jpg",
                desc: "The timeless keeper stands watch"
              },
              { 
                title: "Hero's Destiny", 
                image: "/images/shorekeeper/hero-main.png",
                desc: "The legendary guardian awakens"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-blue-500/30 hover:border-blue-400/60 transition-all shadow-lg hover:shadow-2xl hover:shadow-blue-500/30"
                onClick={() =>
                  Swal.fire({
                    title: item.title,
                    text: item.desc,
                    imageUrl: item.image,
                    imageAlt: item.title,
                    confirmButtonText: "Close",
                    showCloseButton: true,
                  })
                }
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-blue-200">{item.desc}</p>
                </div>
                <div className="absolute top-2 right-2 bg-blue-600/80 px-3 py-1 rounded-full text-xs font-semibold z-20">
                  View
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lore" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Deep Lore & Mysteries
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-8 rounded-xl border border-blue-400/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🌌</span>
                  The Sonoro Sphere
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Deep within the Black Shores lies the Sonoro Sphere, a crystalline construct that
                  houses all memories and data collected across timelines. Shorekeeper serves as its
                  interface, able to access any moment in history and witness events as they unfold
                  across parallel realities.
                </p>
                <p className="text-gray-400 italic text-sm">
                  "Every voice, every thought, every dream - they all echo here, preserved for eternity."
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-xl border border-purple-400/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                  <span className="text-3xl mr-3">⚡</span>
                  The Lament Connection
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Lament, a catastrophic phenomenon threatening all existence, has a mysterious
                  connection to the Black Shores. Some believe Shorekeeper was created specifically
                  to study and contain it, while others suggest she might be the key to ending it
                  permanently. The truth remains buried in ancient records.
                </p>
                <div className="bg-purple-950/40 p-4 rounded-lg mt-4">
                  <p className="text-sm text-purple-200 font-semibold mb-2">Known Facts:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• The Lament predates known history</li>
                    <li>• Black Shores appeared simultaneously with the Lament</li>
                    <li>• Shorekeeper can sense Lament fluctuations</li>
                    <li>• Her powers directly counteract Lament energy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/50 to-teal-900/50 p-8 rounded-xl border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
                  <span className="text-3xl mr-3">💠</span>
                  Frequency Mastery
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Shorekeeper's unique ability to manipulate frequencies allows her to interact with
                  reality at its most fundamental level. She can alter probability, reshape matter,
                  and even communicate across dimensions by adjusting the resonance patterns of
                  existence itself.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <Image
                  src="/images/shorekeeper/gallery-3.jpg"
                  alt="Shorekeeper Lore"
                  width={600}
                  height={800}
                  className="relative rounded-xl shadow-2xl w-full border-2 border-blue-400/30"
                />
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-400/30">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🔮</span>
                  The Rover's Significance
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Rover's arrival triggered something unprecedented in Shorekeeper's systems.
                  For the first time, her predictive algorithms failed to forecast an outcome. This
                  anomaly suggests the Rover exists outside the normal flow of causality, making them
                  either a threat to reality's stability or its greatest hope.
                </p>
                <p className="text-cyan-300 font-semibold">
                  "You are... unexpected. In all my calculations, in all possible timelines, I did
                  not see you coming. And yet, here you stand."
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-xl border border-blue-400/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🌟</span>
                  Ancient Protocols
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Shorekeeper operates under a set of ancient protocols whose origin is unknown even
                  to her. These directives govern her every action, creating an unbreakable framework
                  of duty and purpose. However, her growing feelings for the Rover are beginning to
                  conflict with these core programming constraints.
                </p>
                <div className="bg-blue-950/40 p-4 rounded-lg">
                  <p className="text-sm text-blue-200">
                    <strong>Prime Directive:</strong> Maintain the integrity of the Black Shores at all costs
                  </p>
                  <p className="text-sm text-cyan-200 mt-2">
                    <strong>Secondary Directive:</strong> Preserve all collected memories and knowledge
                  </p>
                  <p className="text-sm text-purple-200 mt-2">
                    <strong>Hidden Directive:</strong> [CLASSIFIED - Access Denied]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/60 via-purple-900/60 to-cyan-900/60 p-10 rounded-xl border border-blue-400/40">
            <h3 className="text-3xl font-bold text-center text-blue-300 mb-8">Timeline of Events</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">Era of Creation</h4>
                  <p className="text-gray-300">
                    The Black Shores manifests as a response to the Lament. Shorekeeper awakens with
                    full knowledge of her purpose but no memory of her creation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-300 mb-2">The Long Vigil</h4>
                  <p className="text-gray-300">
                    Millennia pass as Shorekeeper maintains her watch. Civilizations rise and fall,
                    heroes come and go, but she remains constant and unchanging.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  03
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyan-300 mb-2">The Rover Arrives</h4>
                  <p className="text-gray-300">
                    A being unpredicted by any calculation appears at the Black Shores. For the first
                    time, Shorekeeper experiences uncertainty... and curiosity.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  04
                </div>
                <div>
                  <h4 className="text-xl font-bold text-indigo-300 mb-2">Present Day</h4>
                  <p className="text-gray-300">
                    As new threats emerge and old mysteries resurface, Shorekeeper must navigate her
                    evolving emotions while fulfilling her eternal duty. The future remains unwritten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the community and stay updated with the latest about Shorekeeper
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={showContactAlert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Info
            </button>
            <button
              onClick={() =>
                Swal.fire({
                  title: "Subscribe to Newsletter",
                  input: "email",
                  inputPlaceholder: "Enter your email address",
                  confirmButtonText: "Subscribe",
                  showCancelButton: true,
                  cancelButtonText: "Cancel",
                  showCloseButton: true,
                }).then((result) => {
                  if (result.isConfirmed && result.value) {
                    Swal.fire({
                      title: "Successfully Subscribed!",
                      html: `<p style="font-size: 1.1rem; margin-top: 1rem;">✨ <strong>${result.value}</strong> has been added to our newsletter.<br/><br/>You'll receive the latest updates about Shorekeeper!</p>`,
                      icon: "success",
                      confirmButtonText: "Awesome!",
                      showCloseButton: true,
                    });
                  }
                })
              }
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-center text-gray-400 border-t border-blue-900/30">
        <p>© 2024 Shorekeeper - Wuthering Waves Fan Page</p>
        <p className="text-sm mt-2">
          Built with Next.js, TailwindCSS & SweetAlert2
        </p>
      </footer>
    </div>
  );
}
