import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  ChevronDown,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import profileImage from "@assets/b4c7869b-c0cd-4385-9456-cb80f1adb948-1_all_19025-removebg-preview_1761286709032.png";

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Software Engineer", "Full Stack Developer", ".NET Specialist", "React Developer"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, roleIndex, isDeleting]);

  // Scroll listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-['Space_Grotesk'] text-xl font-bold"
            >
              M. Muddassir
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  data-testid={`link-nav-${item.toLowerCase()}`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-mobile-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary font-medium mb-2" data-testid="text-greeting">
                  Hi, my name is
                </p>
                <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold mb-4" data-testid="text-name">
                  Muhammad Muddassir
                </h1>
                <div className="h-16 flex items-center">
                  <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-medium text-muted-foreground" data-testid="text-role">
                    {typedText}
                    <span className="animate-pulse-subtle">|</span>
                  </h2>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl"
                data-testid="text-summary"
              >
                Software Engineering graduate from NED University with 1.5+ years of hands-on experience
                in full-stack development, specializing in .NET and React. Building responsive web
                applications and delivering clean, maintainable code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  data-testid="button-view-projects"
                  className="backdrop-blur-lg"
                >
                  View Projects
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-download-resume"
                  className="backdrop-blur-lg"
                >
                  <a href="/attached_assets/M.MUDDASSIR Resume_1761286369693.pdf" download>
                    <Download className="mr-2 w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 pt-4"
              >
                <Button size="icon" variant="ghost" asChild className="hover-elevate active-elevate-2" data-testid="link-github">
                  <a href="https://github.com/muddassir" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild className="hover-elevate active-elevate-2" data-testid="link-linkedin">
                  <a href="https://linkedin.com/in/muddassir" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild className="hover-elevate active-elevate-2" data-testid="link-email">
                  <a href="mailto:muddassir@example.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl animate-pulse-subtle" />
                <motion.img
                  src={profileImage}
                  alt="Muhammad Muddassir"
                  className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl animate-float"
                  data-testid="img-profile"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle icon={<Code2 />} title="About Me" />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <StatCard
              number="1.5+"
              label="Years Experience"
              delay={0}
            />
            <StatCard
              number="3"
              label="Major Projects"
              delay={0.1}
            />
            <StatCard
              number="Full Stack"
              label="Expertise"
              delay={0.2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-about">
                I'm a passionate full-stack developer with a strong foundation in both frontend and backend
                technologies. My journey in software engineering has equipped me with the skills to build
                responsive web applications, integrate RESTful APIs, and deliver clean, maintainable code.
                I'm committed to continuous learning and collaborating with teams to create quality solutions
                that make a difference.
              </p>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle icon={<Briefcase />} title="Professional Experience" />
          
          <div className="mt-12 space-y-8">
            <ExperienceCard
              company="Code N Consult"
              role="Software Engineer"
              period="Aug 2025 – Present (4 months)"
              location="Karachi"
              description="Work on Business Central automations and customizations using AL. Develop and maintain backend workflows and API integrations for enterprise solutions."
              achievements={[
                "Collaborate with team members to understand business requirements and implement technical solutions",
                "Participate in code reviews and follow best practices for code quality and documentation",
                "Quickly adapt to new tools and frameworks as project requirements evolve",
              ]}
              delay={0}
            />
            
            <ExperienceCard
              company="Andev Matrix"
              role="Full Stack Software Engineer"
              period="Aug 2024 – Aug 2025 (1 year)"
              location="UAE (Remote)"
              description="Developed web applications using React.js for frontend and .NET for backend API development."
              achievements={[
                "Built responsive user interfaces with React, TypeScript, and JavaScript",
                "Integrated RESTful APIs between React frontend and .NET backend services",
                "Worked with SQL databases to implement data-driven features",
                "Collaborated in Agile teams to deliver features on schedule",
              ]}
              delay={0.2}
            />
            
            <ExperienceCard
              company="Infosys Tech"
              role="Frontend Development Intern"
              period="6 months"
              location="Remote"
              description="Developed frontend components using React and JavaScript."
              achievements={[
                "Assisted in REST API integration for web applications",
                "Participated in Agile sprint planning and code reviews",
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle icon={<Code2 />} title="Featured Projects" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProjectCard
              title="Study Connect"
              description="Built a web platform using React and TypeScript with responsive interfaces and integrated RESTful APIs."
              technologies={["React", "TypeScript", "REST API", "Responsive Design"]}
              delay={0}
            />
            
            <ProjectCard
              title="Asaan Campus"
              description="Developed mobile application with React Native frontend and .NET backend for academic data management."
              technologies={["React Native", ".NET", "SQL", "Real-time Updates"]}
              delay={0.1}
              highlight
            />
            
            <ProjectCard
              title="Language Access"
              description="Created React Native mobile app with responsive UI using TypeScript and JavaScript with RESTful API integration."
              technologies={["React Native", "TypeScript", "REST API", "SQL"]}
              delay={0.2}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle icon={<Code2 />} title="Technical Skills" />
          
          <div className="mt-12 space-y-12">
            <SkillCategory
              title="Frontend Development"
              skills={[
                { name: "React.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 88 },
                { name: "TypeScript", level: 85 },
                { name: "HTML5 & CSS3", level: 92 },
                { name: "Responsive Design", level: 90 },
              ]}
              delay={0}
            />
            
            <SkillCategory
              title=".NET & Backend"
              skills={[
                { name: ".NET Framework", level: 85 },
                { name: "C#", level: 82 },
                { name: "RESTful API", level: 88 },
                { name: "SQL", level: 80 },
                { name: "API Development", level: 85 },
              ]}
              delay={0.2}
            />
            
            <SkillCategory
              title="Tools & Practices"
              skills={[
                { name: "Git & Version Control", level: 90 },
                { name: "Agile Methodology", level: 85 },
                { name: "API Testing", level: 82 },
                { name: "Code Reviews", level: 88 },
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Certifications */}
      <AnimatedSection id="education">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle icon={<GraduationCap />} title="Education & Certifications" />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full" data-testid="card-education">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-2" data-testid="text-degree">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid="text-major">
                      Software Engineering
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-university">
                      NED University of Engineering and Technology
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-edu-details">
                      Karachi • 2021 – 2025
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="space-y-4">
              <CertificationCard
                title="Google Advanced Data Analytics & Machine Learning"
                issuer="Google"
                year="2024"
                delay={0.1}
              />
              <CertificationCard
                title="Web Development with HTML, CSS, and JavaScript"
                issuer="IBM"
                year="2023"
                delay={0.2}
              />
            </div>
          </div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20" data-testid="card-award">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-2" data-testid="text-award-title">
                    Winner - Web Development Competition
                  </h3>
                  <p className="text-muted-foreground mb-2" data-testid="text-award-org">
                    Sentec Society, NED University • July 2023
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-award-details">
                    1st place in university-wide web application development competition
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle icon={<Mail />} title="Get In Touch" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently looking for new opportunities and collaborations. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <ContactCard
                icon={<Mail />}
                label="Email"
                value="muddassir@example.com"
                href="mailto:muddassir@example.com"
                delay={0}
              />
              <ContactCard
                icon={<Phone />}
                label="Phone"
                value="+92 3130111878"
                href="tel:+923130111878"
                delay={0.1}
              />
              <ContactCard
                icon={<Github />}
                label="GitHub"
                value="github.com/muddassir"
                href="https://github.com/muddassir"
                delay={0.2}
              />
              <ContactCard
                icon={<Linkedin />}
                label="LinkedIn"
                value="linkedin.com/in/muddassir"
                href="https://linkedin.com/in/muddassir"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Muddassir. Built with React & TypeScript.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full shadow-lg hover-elevate active-elevate-2"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}

// Reusable Components

function AnimatedSection({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative">
      {children}
    </section>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-8"
    >
      <div className="p-2 bg-primary/10 rounded-lg">
        <div className="w-6 h-6 text-primary">{icon}</div>
      </div>
      <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all" data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="text-4xl font-['Space_Grotesk'] font-bold text-primary mb-2" data-testid={`stat-number-${label.toLowerCase().replace(/\s+/g, '-')}`}>
          {number}
        </div>
        <div className="text-sm text-muted-foreground" data-testid={`stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>{label}</div>
      </Card>
    </motion.div>
  );
}

function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  achievements,
  delay,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold mb-1" data-testid={`text-role-${company.toLowerCase().replace(/\s+/g, '-')}`}>
              {role}
            </h3>
            <p className="text-lg text-primary font-medium" data-testid={`text-company-${company.toLowerCase().replace(/\s+/g, '-')}`}>{company}</p>
          </div>
          <div className="text-sm text-muted-foreground text-right">
            <div className="flex items-center gap-1 md:justify-end" data-testid={`text-period-${company.toLowerCase().replace(/\s+/g, '-')}`}>
              <Calendar className="w-4 h-4" />
              {period}
            </div>
            <div className="flex items-center gap-1 md:justify-end mt-1" data-testid={`text-location-${company.toLowerCase().replace(/\s+/g, '-')}`}>
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground mb-4" data-testid={`text-description-${company.toLowerCase().replace(/\s+/g, '-')}`}>{description}</p>
        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
  delay,
  highlight = false,
}: {
  title: string;
  description: string;
  technologies: string[];
  delay: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className={`p-6 h-full hover-elevate active-elevate-2 transition-all ${highlight ? 'border-primary/50' : ''}`} data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-3" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm" data-testid={`text-project-desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>{description}</p>
        <div className="flex flex-wrap gap-2" data-testid={`tech-stack-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function SkillCategory({
  title,
  skills,
  delay,
}: {
  title: string;
  skills: Array<{ name: string; level: number }>;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      data-testid={`skill-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h3 className="font-['Space_Grotesk'] text-2xl font-bold mb-6" data-testid={`text-skill-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} delay={delay + i * 0.05} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, level, delay }: { skill: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(level), delay * 1000);
    }
  }, [isInView, level, delay]);

  return (
    <div ref={ref} className="space-y-2" data-testid={`skill-bar-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" data-testid={`skill-name-${skill.toLowerCase().replace(/\s+/g, '-')}`}>{skill}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden" data-testid={`skill-progress-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function CertificationCard({
  title,
  issuer,
  year,
  delay,
}: {
  title: string;
  issuer: string;
  year: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-cert-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}>
        <h3 className="font-['Space_Grotesk'] font-bold mb-2" data-testid={`cert-title-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid={`cert-issuer-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}>
          {issuer} • {year}
        </p>
      </Card>
    </motion.div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-contact-${label.toLowerCase()}`}>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center gap-3 text-center"
          data-testid={`link-contact-${label.toLowerCase()}`}
        >
          <div className="p-3 bg-primary/10 rounded-lg">
            <div className="w-6 h-6 text-primary">{icon}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1" data-testid={`text-contact-label-${label.toLowerCase()}`}>{label}</div>
            <div className="text-sm font-mono" data-testid={`text-contact-value-${label.toLowerCase()}`}>{value}</div>
          </div>
        </a>
      </Card>
    </motion.div>
  );
}
