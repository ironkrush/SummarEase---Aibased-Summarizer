import { logo } from '../assets';

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-5'>
            <h1 className='text-satoshi font-bold text-2xl '>SummarEase</h1>

            <button type='button' onClick={()=> window.open('https://github.com/ironkrush')} className='black_btn'>
            GitHub
        </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'> SummarEase
            </span>
        </h1>
       <h2 className='desc'>
        Simplify your reading with SummarEase, an open-source article summarizer that trasforms lengthy articles into clear and concise summaries 
       </h2>


    </header>
  )
}

export default Hero