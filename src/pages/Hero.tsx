import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Exceptional Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Built with README Design Kit
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Discover a curated collection of outstanding projects showcasing the power of README Design Kit. 
              See how developers are creating beautiful, professional documentation and project showcases.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => window.location.href = "/projects"} // ✅ Direct navigation
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-white/30 hover:border-white/50"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => window.location.href = "/submit"} // ✅ Direct navigation
              className="group bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Submit Your Project</span>
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
