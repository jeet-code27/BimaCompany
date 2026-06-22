"use client"
import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
  collapsible?: boolean | string;
}

export function Accordion({ children, className, type, collapsible, ...props }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)
  
  return (
    <div className={cn("w-full", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const element = child as React.ReactElement<any>;
          return React.cloneElement(element, {
            isOpen: openItem === element.props.value,
            onToggle: () => setOpenItem(openItem === element.props.value ? null : element.props.value)
          } as any)
        }
        return child
      })}
    </div>
  )
}

export function AccordionItem({ children, className, isOpen, onToggle, value, ...props }: any) {
  return (
    <div className={cn("border-b border-border", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const element = child as React.ReactElement<any>;
          return React.cloneElement(element, { isOpen, onToggle } as any)
        }
        return child
      })}
    </div>
  )
}

export function AccordionTrigger({ children, className, isOpen, onToggle }: any) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left",
        className
      )}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

export function AccordionContent({ children, className, isOpen }: any) {
  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"
      )}
      style={{ display: "grid" }}
    >
      <div className={cn("overflow-hidden", className)}>
        {children}
      </div>
    </div>
  )
}
