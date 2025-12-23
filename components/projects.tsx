'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  
  {
    title: 'Active Directory Attack Toolkit',
    description: 'Comprehensive toolkit for AD enumeration, credential harvesting, and lateral movement. Includes Kerberoasting, AS-REP roasting, DCSync, and Golden Ticket attack implementations with OPSEC considerations.',
    tags: ['PowerShell', 'Active Directory', 'Post-Exploitation'],
    category: 'Red Team Tools',
    github: 'https://github.com/00ElliotSop/AD-Attack-Toolkit',
  },  
  {
    title: 'WiFi Handshake Capture Tool',
    description: 'Automated wireless security assessment tool for capturing WPA/WPA2 handshakes, performing deauth attacks, and brute-force analysis. Features wordlist optimization and hash cracking integration.',
    tags: ['Python', 'WiFi Security', 'Penetration Testing'],
    category: 'Network Tools',
    github: 'https://github.com/00ElliotSop',
  },
  {
    title: 'PE Injector Framework',
    description: 'Advanced portable executable injection framework with multiple injection techniques including Process Hollowing, Thread Hijacking, and APC Queue injection. Implements syscall obfuscation and in-memory execution for AV/EDR evasion.',
    tags: ['C#', 'PE Injection', 'EDR Evasion', 'Offensive'],
    category: 'Red Team Tools',
    github: 'https://github.com/00ElliotSop',
  },
  {
    title: 'Crypto Miner Loader Research',
    description: 'Research project analyzing cryptocurrency mining malware deployment techniques, loader obfuscation methods, and persistence mechanisms. Documented common TTP\'s used in real-world campaigns.',
    tags: ['Malware Analysis', 'Research', 'Reverse Engineering'],
    category: 'Research',
    github: 'https://github.com/00ElliotSop',
  },

  {
    title: 'Custom C2 Framework',
    description: 'Lightweight command and control framework with encrypted communications, modular payload system, and anti-forensics capabilities. Built for red team operations with minimal footprint.',
    tags: ['Python', 'C2', 'Red Teaming', 'Encryption'],
    category: 'Red Team Tools',
    github: 'https://github.com/00ElliotSop',
  },
  {
    title: 'Web Application Fuzzer',
    description: 'High-performance web application security scanner with SQL injection, XSS, and command injection detection. Features intelligent payload generation and false positive reduction.',
    tags: ['Python', 'Web Security', 'Fuzzing', 'OWASP'],
    category: 'Web Security Tools',
    github: 'https://github.com/00ElliotSop',
  },
  {
    title: 'OSCP Lab Exploits',
    description: 'Collection of custom exploits and methodologies developed during OSCP preparation. Includes buffer overflow exploits, privilege escalation scripts, and enumeration automation.',
    tags: ['Python', 'Bash', 'Exploitation', 'OSCP'],
    category: 'OSCP Lab Exploits',
    github: 'https://github.com/00ElliotSop',
  },
  {
    title: 'Shellcode Crypter',
    description: 'Multi-stage shellcode encryption and obfuscation tool supporting AES, XOR, and custom encryption schemes. Includes loader generation with syscall evasion and anti-debugging techniques.',
    tags: ['C', 'Assembly', 'Cryptography', 'Evasion'],
    category: 'Red Team Tools',
    github: 'https://github.com/00ElliotSop',
  },
  {
    title: 'Network Pivot Automation',
    description: 'Automated pivoting and tunneling framework for internal network assessments. Supports multiple protocols, dynamic port forwarding, and SOCKS proxy chains for lateral movement.',
    tags: ['Python', 'Networking', 'Pivoting', 'Tunneling'],
    category: 'Network Tools',
    github: 'https://github.com/00ElliotSop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of offensive security tools, research projects, and custom exploits developed for red team operations and penetration testing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:glow-cyan group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/50 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
