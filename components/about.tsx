'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Lock, Network, Database, Terminal } from 'lucide-react'

const skills = [
  { name: 'Nmap', category: 'Reconnaissance', icon: Network },
  { name: 'Burp Suite', category: 'Web Security', icon: Shield },
  { name: 'Metasploit', category: 'Exploitation', icon: Terminal },
  { name: 'BloodHound', category: 'AD Enumeration', icon: Network },
  { name: 'Python', category: 'Scripting', icon: Code },
  { name: 'Bash', category: 'Scripting', icon: Terminal },
  { name: 'C#', category: 'Exploitation', icon: Code },
  { name: 'PowerShell', category: 'Post-Exploitation', icon: Terminal },
  { name: 'Cobalt Strike', category: 'Red Teaming', icon: Shield },
  { name: 'Neo4j', category: 'Data Analysis', icon: Database },
  { name: 'Active Directory', category: 'Infrastructure', icon: Lock },
  { name: 'Linux/Windows', category: 'Operating Systems', icon: Terminal },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm an <span className="text-foreground font-semibold">OSCP-certified offensive security specialist</span> with extensive experience in red team operations, penetration testing, and exploit development. My work focuses on identifying and exploiting vulnerabilities in enterprise environments to help organizations strengthen their security posture.
            </p>
            <p>
              Specializing in <span className="text-primary font-semibold">Active Directory exploitation</span>, <span className="text-secondary font-semibold">custom tooling development</span>, and <span className="text-accent font-semibold">evasion techniques</span>, I approach security assessments with an adversarial mindset. From initial reconnaissance to data exfiltration, I simulate real-world attack scenarios to provide comprehensive security insights.
            </p>
            <p>
              My expertise spans the full attack lifecycle including network enumeration, web application exploitation, privilege escalation, lateral movement, AV/EDR evasion, and persistence mechanisms. I develop custom tools and exploits to tackle unique security challenges.
            </p>
          </div>
          
          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-8">Technical <span className="text-primary">Skills</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:glow-cyan"
                >
                  <skill.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="font-semibold text-foreground">{skill.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{skill.category}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
