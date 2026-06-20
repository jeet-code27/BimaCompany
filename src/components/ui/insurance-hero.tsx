"use client";
import * as React from "react";
import { useEffect, useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string) => {
  if (!colorString) return null;
  const match = colorString.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/
  );
  if (match) {
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
    };
  }
  return null;
};

// A simple SVG Play Icon
const PlayIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
);

export interface InsuranceService {
  name: string;
  href: string;
  imageSrc: string;
}

export interface InsuranceHeroProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  buttonText?: string;
  services: InsuranceService[];
  imageUrl?: string;
  videoUrl?: string;
}

const InsuranceHero = React.forwardRef<HTMLDivElement, InsuranceHeroProps>(
  (
    {
      title = "Insurance that fits your everyday life",
      description = "From your pet to your next vacation, Bima Company covers what matters most. No paperwork headaches, no confusing fine print — just simple cover for real life.",
      buttonText = "Get a quote",
      services,
      imageUrl = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      videoUrl,
      className,
      ...props
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<HTMLButtonElement>(null);
    const coverageRef = useRef<HTMLDivElement>(null);
    const mousePosRef = useRef<{ x: number | null; y: number | null }>({
      x: null,
      y: null,
    });
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    const resolvedCanvasColorsRef = useRef({
      strokeStyle: { r: 103, g: 60, b: 221 }, // Default to primary purple #673CDD
    });

    useEffect(() => {
      const tempElement = document.createElement("div");
      tempElement.style.display = "none";
      document.body.appendChild(tempElement);

      const updateResolvedColors = () => {
        tempElement.style.color = "var(--primary)";
        const computedColor = getComputedStyle(tempElement).color;
        const parsedColor = parseRgbColor(computedColor);
        if (parsedColor) {
          resolvedCanvasColorsRef.current.strokeStyle = parsedColor;
        } else {
          resolvedCanvasColorsRef.current.strokeStyle = { r: 103, g: 60, b: 221 }; // Fallback to Bima brand primary
        }
      };
      
      updateResolvedColors();
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class" &&
            mutation.target === document.documentElement
          ) {
            updateResolvedColors();
            break;
          }
        }
      });
      observer.observe(document.documentElement, { attributes: true });
      return () => {
        observer.disconnect();
        if (tempElement.parentNode) {
          tempElement.parentNode.removeChild(tempElement);
        }
      };
    }, []);

    const drawArrow = useCallback(() => {
      if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

      const targetEl = targetRef.current;
      const ctx = ctxRef.current;
      const mouse = mousePosRef.current;

      const x0 = mouse.x;
      const y0 = mouse.y;

      if (x0 === null || y0 === null) return;

      const rect = targetEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const a = Math.atan2(cy - y0, cx - x0);
      const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
      const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

      const midX = (x0 + x1) / 2;
      const midY = (y0 + y1) / 2;
      const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
      const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
      const controlX = midX;
      const controlY = midY + offset * t;

      const r = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
      
      let fadeOut = 1.0;
      if (coverageRef.current) {
        const covRect = coverageRef.current.getBoundingClientRect();
        if (covRect.top < window.innerHeight * 0.8) {
          fadeOut = Math.max(0, (covRect.top) / (window.innerHeight * 0.8));
        }
        if (y0 > covRect.top - 20) {
          fadeOut = 0;
        }
      }

      const opacity = Math.min(
        1.0,
        (r - Math.max(rect.width, rect.height) / 2) / 500
      ) * fadeOut;

      if (opacity <= 0) return;

      const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
      ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
      ctx.lineWidth = 2;

      // Draw curve
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(controlX, controlY, x1, y1);
      ctx.setLineDash([10, 5]);
      ctx.stroke();
      ctx.restore();

      // Draw arrowhead
      const angle = Math.atan2(y1 - controlY, x1 - controlX);
      const headLength = 10 * (ctx.lineWidth / 1.5);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(
        x1 - headLength * Math.cos(angle - Math.PI / 6),
        y1 - headLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.moveTo(x1, y1);
      ctx.lineTo(
        x1 - headLength * Math.cos(angle + Math.PI / 6),
        y1 - headLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.stroke();
    }, []);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas || !targetRef.current) return;

      ctxRef.current = canvas.getContext("2d");
      const ctx = ctxRef.current;

      const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const handleMouseMove = (e: MouseEvent) => {
        mousePosRef.current = { x: e.clientX, y: e.clientY };
      };

      window.addEventListener("resize", updateCanvasSize);
      window.addEventListener("mousemove", handleMouseMove);
      updateCanvasSize();

      const animateLoop = () => {
        if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawArrow();
        }
        animationFrameIdRef.current = requestAnimationFrame(animateLoop);
      };

      animateLoop();

      return () => {
        window.removeEventListener("resize", updateCanvasSize);
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
      };
    }, [drawArrow]);

    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement && videoUrl) {
        const handleVideoEnd = () => {
          setShowVideo(false);
          videoElement.currentTime = 0;
        };

        if (showVideo) {
          videoElement.play().catch((error) => {
            console.error("HeroSection: Error playing video:", error);
            setShowVideo(false);
          });
          videoElement.addEventListener("ended", handleVideoEnd);
        } else {
          videoElement.pause();
        }

        return () => {
          videoElement.removeEventListener("ended", handleVideoEnd);
        };
      }
    }, [showVideo, videoUrl]);

    const handlePlayButtonClick = () => {
      if (videoUrl) {
        setShowVideo(true);
      }
    };

    const containerVariants: import("framer-motion").Variants = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.08 } },
    };
    const itemVariants: import("framer-motion").Variants = {
      hidden: { y: 16, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, damping: 14 },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("bg-background text-foreground min-h-screen relative flex flex-col", className)}
        {...props}
      >
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50"
        ></canvas>

        <main className="flex-grow flex flex-col items-center justify-start pt-16 sm:pt-24 pb-16 z-20 w-full">
          
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-normal">
              {title}
            </h1>
            <p className="mt-6 text-muted-foreground text-lg sm:text-xl max-w-2xl">
              {description}
            </p>
          </div>

          <div className="mt-10 flex justify-center w-full">
            <Button
              ref={targetRef}
              size="lg"
              variant="cta"
              className="rounded-full text-lg px-8 py-6 z-20 shadow-lg relative"
            >
              {buttonText}
            </Button>
          </div>

          {/* New Image/Video Hero Card */}
          <div className="mt-16 w-full max-w-6xl mx-auto overflow-hidden px-4 sm:px-6">
            <div className="bg-border/50 rounded-[2.5rem] p-[0.35rem]">
              <div className="relative h-64 sm:h-80 md:h-[28rem] lg:h-[36rem] rounded-[2.15rem] bg-card flex items-center justify-center overflow-hidden">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Bima Company Insurance Preview"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  />
                )}
                {videoUrl && (
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  />
                )}
                {!showVideo && videoUrl && imageUrl && (
                  <button
                    onClick={handlePlayButtonClick}
                    className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 p-3 sm:p-4 bg-accent/50 hover:bg-accent/80 text-accent-foreground backdrop-blur-md rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Play video"
                  >
                    <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Original Services Circle Grid Updated to Half-Circular Shape */}
          <div ref={coverageRef} className="max-w-7xl mx-auto mt-24 px-4 w-full">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground tracking-tight">Explore Our Coverage</h2>
            <motion.div
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => {
                const themeColors = [
                  "bg-[#F9D4D5]", "bg-[#F3D9C4]", "bg-[#EAE1DA]", "bg-[#D8B89A]",
                  "bg-[#C9D9B0]", "bg-[#D1E5E6]", "bg-[#A9D6E5]", "bg-[#E2D4F0]"
                ];
                const themeColor = themeColors[index % themeColors.length];
                
                return (
                <motion.a
                  key={service.name}
                  href={service.href}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05, zIndex: 40 }}
                  className="w-full max-w-[260px] block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 z-20"
                >
                  <div
                    className={cn(
                      "relative pt-10 pb-6 px-6 rounded-t-[50%] h-[320px] md:h-[380px] flex flex-col items-center justify-between text-center overflow-hidden shadow-sm group-hover:shadow-xl transition-all",
                      themeColor
                    )}
                  >
                    <div className="text-black z-10 relative mt-2">
                      <h3 className="font-bold text-base md:text-lg leading-snug px-2">{service.name}</h3>
                    </div>
                    <img
                      src={service.imageSrc}
                      alt={service.name}
                      className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom transition-all duration-500 ease-out origin-bottom group-hover:scale-[1.12] group-hover:-rotate-2 group-hover:-translate-y-1"
                      style={{ maxHeight: "85%" }}
                    />
                  </div>
                </motion.a>
              )})}
            </motion.div>
          </div>
        </main>
      </div>
    );
  }
);

InsuranceHero.displayName = "InsuranceHero";

export { InsuranceHero };
