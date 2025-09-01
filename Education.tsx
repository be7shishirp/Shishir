import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      level: "SEE (Class 10)",
      gpa: "3.70",
      subjects: "Optional Math and Account",
      year: "Passed 2076 BS",
      description: "Completed my School Leaving Certificate with distinction, focusing on mathematics and accounting fundamentals. This foundation sparked my interest in numerical analysis and financial management, setting the stage for my future academic pursuits.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      level: "+2 (Class 12)",
      gpa: "3.08",
      subjects: "Account and Business Studies",
      year: "Passed 2081 BS",
      description: "Pursued Higher Secondary Education specializing in accounting and business studies. This comprehensive program deepened my understanding of financial principles, business operations, and analytical thinking, preparing me for professional challenges ahead.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="rainbow-text text-5xl md:text-6xl font-bold text-center mb-16 animate-slide-in">
          Education
        </h2>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="glass-card p-8 animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center mb-6 animate-float glow-effect`}>
                    <edu.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">{edu.level}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-bold text-xl">{edu.gpa} GPA</span>
                    </div>
                    <span className="text-white/60">{edu.year}</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 mb-4">
                    <p className="text-purple-300 font-medium">{edu.subjects}</p>
                  </div>
                </div>

                <div className="text-white/80 leading-relaxed">
                  <p className="text-lg">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8">
            <h3 className="rainbow-text text-3xl font-bold mb-6">Academic Journey</h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto">
              My educational journey has been marked by consistent growth and a passion for learning. 
              From building strong mathematical foundations during my SEE to specializing in business 
              and accounting principles in +2, each step has contributed to my analytical mindset and 
              professional development. This academic background, combined with practical experience, 
              has shaped my approach to problem-solving and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;