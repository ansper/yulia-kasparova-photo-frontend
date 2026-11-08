'use client';

import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="w-full max-w-7xl mx-auto px-6 py-3 flex items-center justify-between border-b border-stone-200/60 text-xs tracking-widest uppercase">
        
                <div className="flex items-center gap-4 text-stone-600">
                    <a href="#" className="hover:text-black transition">WA</a>
                    <a href="#" className="hover:text-black transition">TG</a>
                    <a href="#" className="hover:text-black transition">IG</a>
                </div>

                <nav className="flex items-center gap-6 font-light">
                    <Link href="/" className="hover:text-black transition">Главная</Link>
                    <span className="text-stone-300 font-extralight">|</span>
                    
                    <Link href="/about" className="hover:text-black transition">Обо мне</Link>
                    <span className="text-stone-300 font-extralight">|</span>
                    
                    <div className="relative group cursor-pointer py-1">
                        <span className="hover:text-black transition flex items-center gap-1">
                            Портфолио <span className="font-bolt text-[10px] ">⌵</span>
                        </span>
                    </div>
                    <span className="text-stone-300 font-extralight">|</span>
                    
                    <Link href="/services" className="hover:text-black transition">Услуги</Link>
                    <span className="text-stone-300 font-extralight">|</span>
                    
                    <Link href="/reviews" className="hover:text-black transition">Отзывы</Link>
                </nav>
                
                <div className="w-[60px] hidden md:block"></div>
            </div>

            <div className="w-full flex flex-col items-center justify-center pt-8 pb-6">
                <Link href="/" className="text-4xl font-serif tracking-normal text-stone-900 hover:opacity-80 transition">
                Юлия Каспарова
                </Link>
                <span className="text-[11px] tracking-[0.2em] font-light text-stone-500 uppercase mt-1">
                Снимаю с любовью
                </span>
            </div>
        </header>
    );
}