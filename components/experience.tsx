'use client'

import { motion } from 'framer-motion'
import { Search, Key, ArrowUpRight, GitBranch, Eye, FileOutput, FileText } from 'lucide-react'

const capabilities = [
  {
    title: 'Recon & Enumeration',
    icon: Search,
    items: [
      'Network mapping and service discovery',
      'OSINT and information gathering',
      'DNS enumeration and subdomain discovery',
      'Web application reconnaissance',
    ],
  },
  {
    title: 'Initial Access',
    icon: Key,
    items: [
      'Phishing and social engineering',
      'Public-facing application exploitation',
      'Password spraying and credential stuffing',
      'Drive-by compromise and watering holes',
    ],
  },
  {
    title: 'Privilege Escalation',
    icon: ArrowUpRight,
    items: [
      'Windows and Linux privilege escalation',
      'Exploiting misconfigurations',
      'Kernel exploits and driver vulnerabilities',
      'Token impersonation and privilege abuse',
    ],
  },
  {
    title: 'Lateral Movement',
    icon: GitBranch,
    items: [
      'Pass-the-Hash and Pass-the-Ticket attacks',
      'WMI and DCOM lateral movement',
      'Remote service exploitation',
      'Kerberoasting and AS-REP roasting',
    ],
  },
  {
    title: 'AV/EDR Evasion',
    icon: Eye,
    items: [
      'In-memory execution and fileless attacks',
      'Process injection and hollowing',
      'Syscall obfuscation',
      'Signature and heuristic evasion',
    ],
  },
  {
    title: 'Data Exfiltration',
    icon: FileOutput,
    items: [
      'Covert channel communications',
      'DNS tunneling and ICMP exfiltration',
      'Encrypted data transfer',
      'Cloud storage abuse',
    ],
  },
  {
    title: 'Persistence',
    icon: GitBranch,
    items: [
      'Registry and scheduled task persistence',
      'Service and DLL hijacking',
      'WMI event subscriptions',
      'Golden Ticket and skeleton keys',
    ],
  },
  {
    title: 'Reporting & Documentation',
    icon: FileText,
    items: [
      'Detailed technical writeups',
      'Executive summaries and risk analysis',
      'Remediation recommendations',
      'Attack path visualization',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
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
              Red Team <span className="text-primary">Capabilities</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive offensive security capabilities across the complete attack lifecycle, from initial reconnaissance to post-exploitation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:glow-blue"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{capability.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {capability.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
