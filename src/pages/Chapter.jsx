import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Construction, Loader2, FileText } from 'lucide-react'
import { useState, useEffect } from 'react'

export const Chapter = () => {
  const { subjectId, chapterId } = useParams()
  const [fileId, setFileId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hardcoded logic for testing Chapters with Google Drive
    if (subjectId === 'mathematics' && chapterId === 'math-ch1') {
      setFileId('10bAxKysH0tcEXDedk9W8aK83f9pgH541')
    } else if (subjectId === 'mathematics' && chapterId === 'math-ch2') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch3') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch4') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch5') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch6') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch7') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch8') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch9') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch10') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch11') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch12') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch13') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    }else if (subjectId === 'mathematics' && chapterId === 'math-ch4') {
      setFileId('1omTDEDjm3hFl3o52wK1s0mw_9kOMpE0t')
    } else if (subjectId === 'science' && chapterId === 'sci-ch1') {
      setFileId('1sfLRFAZr-V6WpLRV-S7WOl7Qj6lZe7N3')
    } else if (subjectId === 'science' && chapterId === 'sci-ch2') {
      setFileId('1rUoWmxLmlKthPARYDZBIvfPsscy_RY-S')
    } else {
      setFileId(null)
    }
    setLoading(false)
  }, [subjectId, chapterId])

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link 
              to={`/subjects/${subjectId}`} 
              className="inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Subject
            </Link>
            
            <div className="text-sm font-medium text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary-500" />
              Chapter {chapterId.split('-ch')[1]}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary-500" />
            <p className="font-medium">Loading chapter content...</p>
          </div>
        ) : fileId ? (
          <div className="w-full h-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Notes PDF
              </span>
              <a 
                href={`https://drive.google.com/file/d/${fileId}/view`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium bg-white border border-slate-200 px-3 py-1.5 rounded-md hover:bg-slate-50 text-slate-600 transition-colors"
              >
                Open in Drive
              </a>
            </div>
            <iframe 
              src={`https://drive.google.com/file/d/${fileId}/preview`} 
              className="w-full"
              style={{ height: '600px' }}
              title="Chapter Notes PDF"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-2xl w-full text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-50 rounded-full blur-2xl opacity-50" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-primary-50 rounded-full blur-2xl opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-50 text-primary-600 mb-8 shadow-sm border border-primary-100">
                <Construction className="w-10 h-10" />
              </div>
              
              <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Content Coming Soon
              </h1>
              
              <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
                We're working hard to prepare high-quality learning materials for this chapter. Please check back later!
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 border border-slate-200 text-sm font-medium">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>In development</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
