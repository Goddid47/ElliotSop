'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Key } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/00ElliotSop', color: 'hover:text-primary' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-accent' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@elliotsop.com', color: 'hover:text-secondary' },
]

const pgpPublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXxXXXBEADXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
... [Contact me for full PGP key] ...

-----END PGP PUBLIC KEY BLOCK-----`

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, security consulting, or red team assessments? Let's connect.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5 text-primary" />
                    PGP Public Key
                  </CardTitle>
                  <CardDescription>
                    For secure communications, encrypt your messages using my PGP key.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background border border-border rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-muted-foreground">{pgpPublicKey}</pre>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connect</CardTitle>
                  <CardDescription>
                    Find me on these platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.name}
                        variant="outline"
                        size="lg"
                        className={`flex-1 border-primary/50 ${link.color}`}
                        asChild
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="w-5 h-5 mr-2" />
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-24 py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ElliotSop. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
