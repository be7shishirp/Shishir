import React from 'react';
import { BookOpen, Search, Briefcase, TrendingUp, Calculator, FileText, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: "Reading & Research", icon: BookOpen, level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Explorer Mindset", icon: Search, level: 90, color: "from-green-500 to-emerald-500" },
    { name: "Professional Growth", icon: TrendingUp, level: 85, color: "from-purple-500 to-pink-500" }
  ];

  const experience = [
    { tool: "Tally", description: "Financial accounting and inventory management", icon: Calculator },
    { tool: "Excel", description: "Data analysis and financial modeling", icon: BarChart3 },
    { tool: "Audit Files", description: "Compliance and documentation management", icon: FileText }
  ];

  const projects = [
    {
      title: "Financial Analysis Dashboard",
      description: "Comprehensive audit tracking system",
      tech: ["Tally", "Excel", "Data Analysis"],
      status: "Completed"
    },
    {
      title: "Inventory Management System",
      description: "Streamlined stock control and reporting",
      tech: ["Tally", "Process Optimization"],
      status: "In Progress"
    },
    {
      title: "Compliance Documentation",
      description: "Automated audit file organization",
      tech: ["Excel", "Documentation", "Quality Control"],
      status: "Ongoing"
    }
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="rainbow-text text-5xl md:text-6xl font-bold text-center mb-16 animate-slide-in">
          Skills & Experience
        </h2>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="rainbow-text text-3xl font-bold text-center mb-12">Core Abilities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center animate-fade-in-up hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-float glow-effect`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full animate-progress-bar`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-white/70">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="rainbow-text text-3xl font-bold text-center mb-12">Professional Experience</h3>
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-float" />
              <h4 className="text-2xl font-bold text-white mb-2">1 Year in Audit Work</h4>
              <p className="text-white/70">Professional experience in financial analysis and audit processes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 hover:scale-105 transition-all duration-300"
                >
                  <exp.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h5 className="text-xl font-bold text-white mb-2">{exp.tool}</h5>
                  <p className="text-white/70">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Showcase */}
        <div>
          <h3 className="rainbow-text text-3xl font-bold text-center mb-12">Project Showcase</h3>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass-card p-6 animate-fade-in-up hover:scale-105 transition-all duration-500 cursor-pointer project-flow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-white/70">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-right">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;