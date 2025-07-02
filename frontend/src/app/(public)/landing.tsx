'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProgressBarLink } from '@/contexts/progress-bar'

export default function Landing() {
    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-24 ">
                <motion.h2
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Build. Launch. Grow.
                </motion.h2>
                <motion.p
                    className="max-w-xl mb-6 text-lg text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Empowering your business with a modern, reliable, and scalable solution.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                >
                    <ProgressBarLink href={'/user'}>
                        <Button size="lg">Start for Free</Button>
                    </ProgressBarLink>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-muted/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">About Us</h3>
                    <p className="text-muted-foreground">
                        We are a team of passionate engineers and designers dedicated to building beautiful, high-performance websites and apps that make a difference.
                    </p>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="whyus" className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-12">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-lg mb-2">⚡ Fast Performance</h4>
                                <p className="text-muted-foreground">Optimized for speed and smooth user experience, keeping your users engaged.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-lg mb-2">🛡️ Secure & Reliable</h4>
                                <p className="text-muted-foreground">Built with industry best practices to keep your data safe and services online.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-lg mb-2">💡 Innovative Design</h4>
                                <p className="text-muted-foreground">Modern, aesthetic, and user-focused design that reflects your brand perfectly.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section id="testimonials" className="py-20 px-6 bg-muted/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-12">What Our Users Say</h3>
                    <motion.div
                        className="p-6 bg-background rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg mb-4">This platform transformed our business! It&apos;s beautiful, easy to use, and incredibly fast.</p>
                        <p className="font-semibold">— Jane Doe, Founder @ StartupX</p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
