"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
	const [isCrazy, setIsCrazy] = useState(false);
	const [typedText, setTypedText] = useState("");
	const sfxRef = useRef<HTMLAudioElement | null>(null);
	const fullText =
		"This is too much... I beg you... I can't do this anymore... Go to Anxiety Island but leave me alone please...";

	useEffect(() => {
		if (isCrazy) {
			let i = 0;
			const interval = setInterval(() => {
				if (i < fullText.length) {
					let nextI = i + 1;
					if (fullText[nextI] === " ") {
						nextI++;
					}
					setTypedText(fullText.slice(0, nextI));
					i = nextI;
				} else {
					clearInterval(interval);
				}
			}, 150);
			return () => clearInterval(interval);
		} else {
			setTypedText("");
		}
	}, [isCrazy]);

	return (
		<>
			<audio
				ref={sfxRef}
				src={"sfx.mp3"}
				className="hidden w-0 h-0"
				autoPlay={false}
				preload="true"
			/>
			<div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900 text-stone-900 dark:text-stone-100">
				<header className="text-center py-20 pb-10 px-4">
					<p className="text-sm italic text-stone-500">
						Flash Warning!
					</p>
					<h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-800 dark:from-stone-200 dark:to-stone-400">
						Welcome to Mount Unhappiness!
					</h1>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						The only mountain that makes you question your life
						choices even more than before!
					</p>
					<p className="text-lg italic">
						Featuring the world&apos;s most depressed peak since
						1842.
					</p>
					<p className="text-sm italic text-stone-500">
						Oh, and this page? It&apos;s just here because it has to
						be. Don&apos;t mind it.
					</p>
				</header>

				<section className="py-16 px-4 bg-stone-50 dark:bg-stone-900 rounded-t-3xl">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-stone-700 dark:text-stone-300">
							Photo Collage
							<span className="text-sm italic block">
								(I really look worse and worse every single
								day...)
							</span>
						</h2>
						<div className="grid grid-cols-2 gap-4">
							<div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden flex flex-col">
								<Image
									src="mount_unhappiness.jpg"
									alt="Collage 1"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
								<p className="absolute bottom-0 left-0 right-0 bg-stone-900/70 text-stone-100 text-center text-sm p-2">
									Mount Unhappiness in the shining sun. This
									picture is over 200 years old and absolutely
									no propaganda.
								</p>
							</div>
							<div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden flex flex-col">
								<Image
									src="mount_unhappiness2.jpg"
									alt="Collage 2"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
								<p className="absolute bottom-0 left-0 right-0 bg-stone-900/70 text-stone-100 text-center text-sm p-2">
									Bask in the endless drizzle — each drop a
									gentle reminder that the sun has forgotten
									this place, just like your dreams.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16 px-4 bg-stone-100 dark:bg-stone-800 rounded-t-3xl">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-stone-700 dark:text-stone-300">
							Why Visit Mount Unhappiness?
						</h2>
						<p className="text-sm italic text-center mb-8 text-stone-500">
							Because sometimes you need a mountain to match your
							mood.
						</p>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<h3 className="text-2xl font-semibold mb-2">
									Therapeutic Despair
								</h3>
								<p>
									Nothing says &quot;healing&quot; like
									staring into the abyss of a perpetually
									cloudy summit. Perfect for processing your
									existential dread!
								</p>
							</div>
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<h3 className="text-2xl font-semibold mb-2">
									Chilling Vibes
								</h3>
								<p>
									Experience temperatures so cold,
									they&apos;ll freeze your ambitions. Great
									for when you want to feel numb inside and
									out! Wet socks included.
								</p>
							</div>
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<h3 className="text-2xl font-semibold mb-2">
									Mysterious Fog
								</h3>
								<p>
									Can&apos;t see 10 feet ahead? Just like your
									future! Embrace the uncertainty and get lost
									in more ways than one.{" "}
									<span className="italic">
										(this seems like your work life after
										school)
									</span>
								</p>
							</div>
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<h3 className="text-2xl font-semibold mb-2">
									Wildlife Encounters
								</h3>
								<p>
									Meet animals just as depressed as you. They
									understand you better than your therapist
									ever could!
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16 px-4 bg-stone-50 dark:bg-stone-900">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-stone-700 dark:text-stone-300">
							Activities That You Wouldn&apos;t Wanna Do
							<span className="text-sm italic block">
								(I don&apos;t want to do this anymore...)
							</span>
						</h2>
						<div className="space-y-6">
							<div className="flex items-center space-x-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div>
									<h3 className="text-xl font-semibold">
										Summit Sulking
									</h3>
									<p>
										Hike to the top and contemplate why you
										wasted this much time on it. Views
										include more clouds and regret.
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div>
									<h3 className="text-xl font-semibold">
										Camping in the Rain
									</h3>
									<p>
										Sleep under leaky tents while
										questioning your waterproof gear
										choices. Nature&apos;s way of saying
										&apos;lol&apos;.
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4 p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div>
									<h3 className="text-xl font-semibold">
										Meditation Mishaps
									</h3>
									<p>
										Find your inner peace... or maybe just
										discover new problems.{" "}
										<span className="font-bold">NEW:</span>{" "}
										mosquitoes join the session uninvited.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16 px-4 bg-stone-100 dark:bg-stone-800 rounded-t-3xl">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-stone-700 dark:text-stone-300">
							Restaurant Menu
							<span className="text-sm italic block">
								(if you can call it that)
							</span>
						</h2>
						<div className="space-y-6">
							<div className="p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div className="flex flex-row justify-between">
									<div>
										<h3 className="text-xl font-semibold">
											Depresso Macchiato
										</h3>
										<p>
											Just as frustrating as the song.
											Caffeinated beverage that won&apos;t
											make you feel more alive either.
											<br />{" "}
											<span className="font-bold">
												NEW RECIPE:
											</span>{" "}
											now with extra existential dread
										</p>
									</div>
									<p className="text-center text-3xl font-bold">
										$4.50
									</p>
								</div>
							</div>
							<div className="p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div className="flex flex-row justify-between">
									<div>
										<h3 className="text-xl font-semibold">
											Glass of Puddle Water
										</h3>
										<p>
											Collected fresh from the parking
											lot. As murky as your future and
											twice as unsettling.
											<br />
											May cause multiple diseases.
										</p>
									</div>
									<p className="text-center text-3xl font-bold">
										$2.00
									</p>
								</div>
							</div>
							<div className="p-4 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div className="flex flex-row justify-between">
									<div>
										<h3 className="text-xl font-semibold">
											Potato Frowns
										</h3>
										<p>
											Potato Smiles are banned by
											tradition. Each frown is
											hand-crafted to remind you of your
											childhood disappointments.
										</p>
									</div>
									<p className="text-center text-3xl font-bold">
										$3.33
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16 px-4 bg-stone-50 dark:bg-stone-900 rounded-t-3xl">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-stone-700 dark:text-stone-300">
							What Our Miserable Visitors Say
							<span className="text-sm italic block">
								(or what they said before therapy — wait... I
								thought they couldn&apos;t help them anymore?)
							</span>
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
								<p className="italic mb-4">
									&quot;I came here to escape my problems. Now
									everything&apos;s even worse{" "}
									<span className="not-italic">😀</span>&quot;
								</p>
								<p className="font-semibold">
									- Sarah, Professional Pessimist
								</p>
							</div>
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
								<p className="italic mb-4">
									&quot;The mountains&apos; aura is really
									impressive! Just seeing it from the car
									ruins my whole week!&quot;
								</p>
								<p className="font-semibold">
									- Mike, Existential Crisis Enthusiast
								</p>
							</div>
							<div className="text-center p-6 bg-stone-200 dark:bg-stone-700 rounded-lg">
								<div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
								<p className="italic mb-4">
									&quot;I just came from Anxiety Island but
									this place is even worse. 5/5 would never go
									here again&quot;
								</p>
								<p className="font-semibold">
									- Alex, Expert in being Useless
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 px-4 text-center">
					<h2 className="text-4xl font-bold mb-8 text-stone-700 dark:text-stone-300">
						Ready to Embrace the Unhappiness?
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Book your ticket to depression paradise today!
					</p>
					<button
						onClick={async () => {
							setIsCrazy(true);

							if (sfxRef.current) {
								sfxRef.current.currentTime = 0;
								await sfxRef.current.play();
							}
						}}
						className="bg-gradient-to-r from-stone-400 to-stone-600 text-white font-bold py-4 px-8 rounded-full text-xl hover:from-stone-500 hover:to-stone-700 transition duration-300 transform hover:scale-105 cursor-pointer"
					>
						Book Your Depressing Adventure!
					</button>
					<p className="mt-4 text-sm text-stone-500">
						*No refunds for emotional damage. Bring your own
						tissues.
					</p>
					<p className="mt-4 text-sm text-stone-500">
						**Therapy cards not accepted.
					</p>
					<p className="text-sm italic text-stone-500 mt-4">
						I&apos;m secretly hoping you&apos;ll scroll past this
						button. Please don&apos;t make it worse.
					</p>
				</section>

				<footer className="py-8 px-4 bg-stone-200 dark:bg-stone-900 text-center">
					<p className="text-lg">
						© 2025 Mount Unhappiness Tourism Ltd. Making vacations
						terrible since forever.
					</p>
				</footer>
			</div>

			{isCrazy && (
				<div className="fixed inset-0 text-white flex items-center justify-center overflow-hidden z-50">
					<div className="absolute inset-0 bg-black/10 animate-pulse flash z-5"></div>
					<div className="text-center z-10">
						<h1
							className="text-6xl font-bold mb-4 animate-bounce flicker glitch"
							data-text="PLEASE STOP!"
						>
							PLEASE STOP!
						</h1>
						<p
							className="text-2xl flicker glitch"
							data-text={typedText}
						>
							{typedText}
						</p>
						<button
							onClick={() => {
								setIsCrazy(false);
								if (sfxRef.current) {
									sfxRef.current.pause();
								}
								if (window) {
									window.location.href = "/scenes/12";
								}
							}}
							className="mt-8 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200 transition flicker glitch cursor-pointer"
							data-text="Okay, I'll go..."
						>
							Okay, I&apos;ll go...
						</button>
					</div>
				</div>
			)}

			{isCrazy && (
				<div
					className="fixed inset-0 bg-white z-50 pointer-events-none"
					style={{ animation: "flashFade 5000ms ease-out forwards" }}
				/>
			)}
		</>
	);
}
