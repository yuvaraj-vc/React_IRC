
import './Assets/css/Nav.css'
function App() {
  return (

 
    
      <div class="body">
      
    <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
            <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <h1 className="relative flex items-center text-5xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
            charm
            <span className="ml-1 rounded-xl bg-current p-2 text-[0.7em] leading-none">
                <span className="text-white dark:text-black">UI</span>
            </span>
        </h1>
        <div className="mt-4">
            <button onclick="toggleTheme()" className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400">Toggle Theme</button>
        </div>
    </div>

      </div>
    



  )
}

export default App;