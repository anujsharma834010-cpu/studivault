import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react'

// Hardcoded data for demonstration
const subjectData = {
  'mathematics': {
    name: 'Mathematics',
    color: 'bg-blue-500',
    chapters: [
      { id: 'math-ch1', title: 'Real Numbers', description: 'Fundamental theorem of arithmetic, irrational numbers.' },
      { id: 'math-ch2', title: 'Polynomials', description: 'Zeroes of a polynomial, division algorithm.' },
      { id: 'math-ch3', title: 'Pair of Linear Equations in Two Variables', description: 'Graphical and algebraic methods of solution.' },
      { id: 'math-ch4', title: 'Quadratic Equations', description: 'Roots of quadratic equations, nature of roots.' },
      { id: 'math-ch5', title: 'Arithmetic Progressions', description: 'Nth term and sum of first n terms.' },
      { id: 'math-ch6', title: 'Triangles', description: 'Similarity of triangles, theorems and properties.' },
      { id: 'math-ch7', title: 'Coordinate Geometry', description: 'Distance formula, section formula.' },
      { id: 'math-ch8', title: 'Introduction to Trigonometry', description: 'Trigonometric ratios and identities.' },
      { id: 'math-ch9', title: 'Some Applications of Trigonometry', description: 'Heights and distances.' },
      { id: 'math-ch10', title: 'Circles', description: 'Tangent to a circle, theorems.' },
      { id: 'math-ch11', title: 'Areas Related to Circles', description: 'Area of sectors and segments.' },
      { id: 'math-ch12', title: 'Surface Areas and Volumes', description: 'Combinations of solids, conversions.' },
      { id: 'math-ch13', title: 'Statistics', description: 'Mean, median and mode of grouped data.' },
      { id: 'math-ch14', title: 'Probability', description: 'Theoretical probability, simple problems.' },
    ]
  },
  'mathematics-solutions': {
    name: 'Mathematics Solutions',
    color: 'bg-teal-500',
    chapters: [
      { id: 'math-sol-ch1', title: 'Real Numbers', description: 'Fundamental theorem of arithmetic, irrational numbers.' },
      { id: 'math-sol-ch2', title: 'Polynomials', description: 'Zeroes of a polynomial, division algorithm.' },
      { id: 'math-sol-ch3', title: 'Pair of Linear Equations in Two Variables', description: 'Graphical and algebraic methods of solution.' },
      { id: 'math-sol-ch4', title: 'Quadratic Equations', description: 'Roots of quadratic equations, nature of roots.' },
      { id: 'math-sol-ch5', title: 'Arithmetic Progressions', description: 'Nth term and sum of first n terms.' },
      { id: 'math-sol-ch6', title: 'Triangles', description: 'Similarity of triangles, theorems and properties.' },
      { id: 'math-sol-ch7', title: 'Coordinate Geometry', description: 'Distance formula, section formula.' },
      { id: 'math-sol-ch8', title: 'Introduction to Trigonometry', description: 'Trigonometric ratios and identities.' },
      { id: 'math-sol-ch9', title: 'Some Applications of Trigonometry', description: 'Heights and distances.' },
      { id: 'math-sol-ch10', title: 'Circles', description: 'Tangent to a circle, theorems.' },
      { id: 'math-sol-ch11', title: 'Areas Related to Circles', description: 'Area of sectors and segments.' },
      { id: 'math-sol-ch12', title: 'Surface Areas and Volumes', description: 'Combinations of solids, conversions.' },
      { id: 'math-sol-ch13', title: 'Statistics', description: 'Mean, median and mode of grouped data.' },
      { id: 'math-sol-ch14', title: 'Probability', description: 'Theoretical probability, simple problems.' },
    ]
  },
  'mathematics-notes': {
    name: 'Mathematics Notes',
    color: 'bg-teal-500',
    chapters: [
      { id: 'math-notes-ch1', title: 'Real Numbers', description: 'Fundamental theorem of arithmetic, irrational numbers.' },
      { id: 'math-notes-ch2', title: 'Polynomials', description: 'Zeroes of a polynomial, division algorithm.' },
      { id: 'math-notes-ch3', title: 'Pair of Linear Equations in Two Variables', description: 'Graphical and algebraic methods of solution.' },
      { id: 'math-notes-ch4', title: 'Quadratic Equations', description: 'Roots of quadratic equations, nature of roots.' },
      { id: 'math-notes-ch5', title: 'Arithmetic Progressions', description: 'Nth term and sum of first n terms.' },
      { id: 'math-notes-ch6', title: 'Triangles', description: 'Similarity of triangles, theorems and properties.' },
      { id: 'math-notes-ch7', title: 'Coordinate Geometry', description: 'Distance formula, section formula.' },
      { id: 'math-notes-ch8', title: 'Introduction to Trigonometry', description: 'Trigonometric ratios and identities.' },
      { id: 'math-notes-ch9', title: 'Some Applications of Trigonometry', description: 'Heights and distances.' },
      { id: 'math-notes-ch10', title: 'Circles', description: 'Tangent to a circle, theorems.' },
      { id: 'math-notes-ch11', title: 'Areas Related to Circles', description: 'Area of sectors and segments.' },
      { id: 'math-notes-ch12', title: 'Surface Areas and Volumes', description: 'Combinations of solids, conversions.' },
      { id: 'math-notes-ch13', title: 'Statistics', description: 'Mean, median and mode of grouped data.' },
      { id: 'math-notes-ch14', title: 'Probability', description: 'Theoretical probability, simple problems.' },
    ]
  },
  'science': {
    name: 'Science',
    color: 'bg-emerald-500',
    chapters: [
      { id: 'sci-ch1', title: 'Chemical Reactions and Equations', description: 'Types of chemical reactions, balancing equations.' },
      { id: 'sci-ch2', title: 'Acids, Bases and Salts', description: 'Properties, pH scale, important salts.' },
      { id: 'sci-ch3', title: 'Metals and Non-metals', description: 'Physical and chemical properties, extraction.' },
      { id: 'sci-ch4', title: 'Carbon and its Compounds', description: 'Covalent bonding, versatile nature of carbon.' },
      { id: 'sci-ch5', title: 'Life Processes', description: 'Nutrition, respiration, transportation, excretion.' },
      { id: 'sci-ch6', title: 'Control and Coordination', description: 'Nervous system, hormones in animals and plants.' },
      { id: 'sci-ch7', title: 'How do Organisms Reproduce?', description: 'Asexual and sexual reproduction.' },
      { id: 'sci-ch8', title: 'Heredity', description: 'Mendel’s contributions, sex determination.' },
      { id: 'sci-ch9', title: 'Light — Reflection and Refraction', description: 'Spherical mirrors, lenses, refractive index.' },
      { id: 'sci-ch10', title: 'Human Eye and Colourful World', description: 'Defects of vision, dispersion of light.' },
      { id: 'sci-ch11', title: 'Electricity', description: 'Ohm’s law, resistance, heating effect.' },
      { id: 'sci-ch12', title: 'Magnetic Effects of Electric Current', description: 'Magnetic field, motors and generators.' },
      { id: 'sci-ch13', title: 'Our Environment', description: 'Ecosystem, food chains, ozone depletion.' },
    ]
  },
  'science-solutions': {
    name: 'Science',
    color: 'bg-emerald-500',
    chapters: [
      { id: 'sci-ch1', title: 'Chemical Reactions and Equations', description: 'Types of chemical reactions, balancing equations.' },
      { id: 'sci-ch2', title: 'Acids, Bases and Salts', description: 'Properties, pH scale, important salts.' },
      { id: 'sci-ch3', title: 'Metals and Non-metals', description: 'Physical and chemical properties, extraction.' },
      { id: 'sci-ch4', title: 'Carbon and its Compounds', description: 'Covalent bonding, versatile nature of carbon.' },
      { id: 'sci-ch5', title: 'Life Processes', description: 'Nutrition, respiration, transportation, excretion.' },
      { id: 'sci-ch6', title: 'Control and Coordination', description: 'Nervous system, hormones in animals and plants.' },
      { id: 'sci-ch7', title: 'How do Organisms Reproduce?', description: 'Asexual and sexual reproduction.' },
      { id: 'sci-ch8', title: 'Heredity', description: 'Mendel’s contributions, sex determination.' },
      { id: 'sci-ch9', title: 'Light — Reflection and Refraction', description: 'Spherical mirrors, lenses, refractive index.' },
      { id: 'sci-ch10', title: 'Human Eye and Colourful World', description: 'Defects of vision, dispersion of light.' },
      { id: 'sci-ch11', title: 'Electricity', description: 'Ohm’s law, resistance, heating effect.' },
      { id: 'sci-ch12', title: 'Magnetic Effects of Electric Current', description: 'Magnetic field, motors and generators.' },
      { id: 'sci-ch13', title: 'Our Environment', description: 'Ecosystem, food chains, ozone depletion.' },
    ]
  },
  'science-notes': {
    name: 'Science',
    color: 'bg-emerald-500',
    chapters: [
      { id: 'sci-ch1', title: 'Chemical Reactions and Equations', description: 'Types of chemical reactions, balancing equations.' },
      { id: 'sci-ch2', title: 'Acids, Bases and Salts', description: 'Properties, pH scale, important salts.' },
      { id: 'sci-ch3', title: 'Metals and Non-metals', description: 'Physical and chemical properties, extraction.' },
      { id: 'sci-ch4', title: 'Carbon and its Compounds', description: 'Covalent bonding, versatile nature of carbon.' },
      { id: 'sci-ch5', title: 'Life Processes', description: 'Nutrition, respiration, transportation, excretion.' },
      { id: 'sci-ch6', title: 'Control and Coordination', description: 'Nervous system, hormones in animals and plants.' },
      { id: 'sci-ch7', title: 'How do Organisms Reproduce?', description: 'Asexual and sexual reproduction.' },
      { id: 'sci-ch8', title: 'Heredity', description: 'Mendel’s contributions, sex determination.' },
      { id: 'sci-ch9', title: 'Light — Reflection and Refraction', description: 'Spherical mirrors, lenses, refractive index.' },
      { id: 'sci-ch10', title: 'Human Eye and Colourful World', description: 'Defects of vision, dispersion of light.' },
      { id: 'sci-ch11', title: 'Electricity', description: 'Ohm’s law, resistance, heating effect.' },
      { id: 'sci-ch12', title: 'Magnetic Effects of Electric Current', description: 'Magnetic field, motors and generators.' },
      { id: 'sci-ch13', title: 'Our Environment', description: 'Ecosystem, food chains, ozone depletion.' },
    ]
  },
  'social-science': {
    name: 'Social Science',
    color: 'bg-orange-500',
    chapters: [
      { id: 'ss-ch1', title: 'The Rise of Nationalism in Europe', description: 'French revolution, making of nationalism.' },
      { id: 'ss-ch2', title: 'Nationalism in India', description: 'Non-cooperation, civil disobedience.' },
      { id: 'ss-ch3', title: 'The Making of a Global World', description: 'Pre-modern world, 19th century economy.' },
      { id: 'ss-ch4', title: 'The Age of Industrialisation', description: 'Before the industrial revolution, factory system.' },
      { id: 'ss-ch5', title: 'Print Culture and the Modern World', description: 'First printed books, print revolution.' },
      { id: 'ss-ch6', title: 'Resources and Development', description: 'Types of resources, soil erosion.' },
      { id: 'ss-ch7', title: 'Forest and Wildlife Resources', description: 'Flora and fauna, conservation.' },
      { id: 'ss-ch8', title: 'Water Resources', description: 'Water scarcity, multi-purpose river projects.' },
      { id: 'ss-ch9', title: 'Agriculture', description: 'Types of farming, cropping pattern.' },
      { id: 'ss-ch10', title: 'Minerals and Energy Resources', description: 'Mode of occurrence, conservation.' },
      { id: 'ss-ch11', title: 'Manufacturing Industries', description: 'Importance, classification of industries.' },
      { id: 'ss-ch12', title: 'Lifelines of National Economy', description: 'Transport, communication, trade.' },
      { id: 'ss-ch13', title: 'Power Sharing', description: 'Belgium and Sri Lanka, forms of power sharing.' },
      { id: 'ss-ch14', title: 'Federalism', description: 'What is federalism, how is it practiced.' },
      { id: 'ss-ch15', title: 'Democracy and Diversity', description: 'Differences, similarities, divisions.' },
      { id: 'ss-ch16', title: 'Gender, Religion and Caste', description: 'Gender and politics, religion and politics.' },
      { id: 'ss-ch17', title: 'Popular Struggles and Movements', description: 'Movement in Nepal and Bolivia.' },
      { id: 'ss-ch18', title: 'Political Parties', description: 'Why do we need political parties, national parties.' },
      { id: 'ss-ch19', title: 'Outcomes of Democracy', description: 'Accountable, responsive and legitimate government.' },
      { id: 'ss-ch20', title: 'Challenges to Democracy', description: 'Thinking about challenges and political reforms.' },
    ]
  },
  'social-science-solutions': {
    name: 'Social Science Solutions',
    color: 'bg-orange-500',
    chapters: [
      { id: 'ss-ch1', title: 'The Rise of Nationalism in Europe', description: 'French revolution, making of nationalism.' },
      { id: 'ss-ch2', title: 'Nationalism in India', description: 'Non-cooperation, civil disobedience.' },
      { id: 'ss-ch3', title: 'The Making of a Global World', description: 'Pre-modern world, 19th century economy.' },
      { id: 'ss-ch4', title: 'The Age of Industrialisation', description: 'Before the industrial revolution, factory system.' },
      { id: 'ss-ch5', title: 'Print Culture and the Modern World', description: 'First printed books, print revolution.' },
      { id: 'ss-ch6', title: 'Resources and Development', description: 'Types of resources, soil erosion.' },
      { id: 'ss-ch7', title: 'Forest and Wildlife Resources', description: 'Flora and fauna, conservation.' },
      { id: 'ss-ch8', title: 'Water Resources', description: 'Water scarcity, multi-purpose river projects.' },
      { id: 'ss-ch9', title: 'Agriculture', description: 'Types of farming, cropping pattern.' },
      { id: 'ss-ch10', title: 'Minerals and Energy Resources', description: 'Mode of occurrence, conservation.' },
      { id: 'ss-ch11', title: 'Manufacturing Industries', description: 'Importance, classification of industries.' },
      { id: 'ss-ch12', title: 'Lifelines of National Economy', description: 'Transport, communication, trade.' },
      { id: 'ss-ch13', title: 'Power Sharing', description: 'Belgium and Sri Lanka, forms of power sharing.' },
      { id: 'ss-ch14', title: 'Federalism', description: 'What is federalism, how is it practiced.' },
      { id: 'ss-ch15', title: 'Democracy and Diversity', description: 'Differences, similarities, divisions.' },
      { id: 'ss-ch16', title: 'Gender, Religion and Caste', description: 'Gender and politics, religion and politics.' },
      { id: 'ss-ch17', title: 'Popular Struggles and Movements', description: 'Movement in Nepal and Bolivia.' },
      { id: 'ss-ch18', title: 'Political Parties', description: 'Why do we need political parties, national parties.' },
      { id: 'ss-ch19', title: 'Outcomes of Democracy', description: 'Accountable, responsive and legitimate government.' },
      { id: 'ss-ch20', title: 'Challenges to Democracy', description: 'Thinking about challenges and political reforms.' },
    ]
  },
  'social-science-notes': {
    name: 'Social Science Notes',
    color: 'bg-orange-500',
    chapters: [
      { id: 'ss-ch1', title: 'The Rise of Nationalism in Europe', description: 'French revolution, making of nationalism.' },
      { id: 'ss-ch2', title: 'Nationalism in India', description: 'Non-cooperation, civil disobedience.' },
      { id: 'ss-ch3', title: 'The Making of a Global World', description: 'Pre-modern world, 19th century economy.' },
      { id: 'ss-ch4', title: 'The Age of Industrialisation', description: 'Before the industrial revolution, factory system.' },
      { id: 'ss-ch5', title: 'Print Culture and the Modern World', description: 'First printed books, print revolution.' },
      { id: 'ss-ch6', title: 'Resources and Development', description: 'Types of resources, soil erosion.' },
      { id: 'ss-ch7', title: 'Forest and Wildlife Resources', description: 'Flora and fauna, conservation.' },
      { id: 'ss-ch8', title: 'Water Resources', description: 'Water scarcity, multi-purpose river projects.' },
      { id: 'ss-ch9', title: 'Agriculture', description: 'Types of farming, cropping pattern.' },
      { id: 'ss-ch10', title: 'Minerals and Energy Resources', description: 'Mode of occurrence, conservation.' },
      { id: 'ss-ch11', title: 'Manufacturing Industries', description: 'Importance, classification of industries.' },
      { id: 'ss-ch12', title: 'Lifelines of National Economy', description: 'Transport, communication, trade.' },
      { id: 'ss-ch13', title: 'Power Sharing', description: 'Belgium and Sri Lanka, forms of power sharing.' },
      { id: 'ss-ch14', title: 'Federalism', description: 'What is federalism, how is it practiced.' },
      { id: 'ss-ch15', title: 'Democracy and Diversity', description: 'Differences, similarities, divisions.' },
      { id: 'ss-ch16', title: 'Gender, Religion and Caste', description: 'Gender and politics, religion and politics.' },
      { id: 'ss-ch17', title: 'Popular Struggles and Movements', description: 'Movement in Nepal and Bolivia.' },
      { id: 'ss-ch18', title: 'Political Parties', description: 'Why do we need political parties, national parties.' },
      { id: 'ss-ch19', title: 'Outcomes of Democracy', description: 'Accountable, responsive and legitimate government.' },
      { id: 'ss-ch20', title: 'Challenges to Democracy', description: 'Thinking about challenges and political reforms.' },
    ]
  }
}

export const Subject = () => {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  
  const subject = subjectData[subjectId]

  if (!subject) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Subject not found</h2>
        <button onClick={() => navigate('/dashboard')} className="text-primary-600 hover:text-primary-500 font-medium">
          Return to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className={`${subject.color} pb-24 pt-8 transition-colors duration-500`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate(-1)} className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{subject.name}</h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              Chapters
              <span className="bg-slate-100 text-slate-600 py-0.5 px-2.5 rounded-full text-sm font-medium">
                {subject.chapters.length}
              </span>
            </h2>
            
            <div className="space-y-4">
              {subject.chapters.map((chapter, index) => (
                <Link
                  key={chapter.id}
                  to={`/subjects/${subjectId}/chapters/${chapter.id}`}
                  className="group flex items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all duration-200"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 font-semibold group-hover:text-primary-600 group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1 sm:mt-0">
                        {chapter.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center text-slate-400 group-hover:text-primary-500 transition-colors">
                    <span className="text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                      View Chapter
                    </span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
