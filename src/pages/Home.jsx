import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, Sparkles } from 'lucide-react'

export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-primary-500/30 flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 p-2 rounded-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">StudiVault</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth" className="text-sm font-medium hover:text-primary-400 transition-colors">
            Login
          </Link>
          <Link 
            to="/auth" 
            className="text-sm font-medium bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 py-20 text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary-300 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>The premier platform for Class 10 students in India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Master your syllabus <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              with confidence.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            StudiVault provides interactive chapters, comprehensive materials, and a structured path to ace your Class 10 board exams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/auth" 
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
            >
              Get Started for Free
              <GraduationCap className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
