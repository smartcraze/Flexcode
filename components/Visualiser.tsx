import BinaryTreeVis from "@/Landing-components/visualizations/BinaryTreeVis";
import SortingVis from "@/Landing-components/visualizations/SortingVis";
import TowerOfHanoiVis from "@/Landing-components/visualizations/TowerOfHanoiVis";
import { ArrowRight, Binary, LineChart, Network } from "lucide-react";
import React from "react";

function Visualiser() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Master DSA Through Visualization
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Learn Data Structures and Algorithms with interactive
            visualizations. Watch algorithms come to life as you learn.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-2xl backdrop-blur-lg border border-purple-500/20 shadow-xl h-[500px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-purple-300">
                    Binary Tree
                  </h3>
                  <Binary className="w-6 h-6 text-purple-400" />
                </div>
                <div className="bg-gray-900/40 rounded-xl overflow-hidden">
                  {/* <BinaryTreeVis /> */}
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Interactive 3D visualization of binary trees. Rotate and zoom
                  to explore the structure.
                </p>
              </div>
            </div>

            <div className="group hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 p-6 rounded-2xl backdrop-blur-lg border border-indigo-500/20 shadow-xl h-[500px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-indigo-300">
                    Sorting Algorithms
                  </h3>
                  <LineChart className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="bg-gray-900/40 rounded-xl overflow-hidden">
                  <SortingVis />
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Watch sorting algorithms in action with real-time
                  visualization and step-by-step execution.
                </p>
              </div>
            </div>

            <div className="group hover:scale-[1.02] transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-2xl backdrop-blur-lg border border-blue-500/20 shadow-xl h-[500px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-blue-300">
                    Tower of Hanoi
                  </h3>
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <div className="bg-gray-900/40 rounded-xl overflow-hidden">
                  <TowerOfHanoiVis />
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Visualize the classic Tower of Hanoi puzzle and its recursive
                  solution algorithm.
                </p>
              </div>
            </div>
          </div>

          

          <button className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto">
            Start Learning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Visualiser;
