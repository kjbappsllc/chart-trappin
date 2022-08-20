import { FacebookIcon, YouTubeIcon } from "../../../shared/ui/icons"

export const Footer = () => {
  return (
    <div className="bg-pink-500 flex py-4">
      <div className="flex justify-center space-x-6 text-center container mx-auto py-2 lg:py-6">
        <FacebookIcon className="w-8 h-8" stroke="white" fill="white" />
        <YouTubeIcon className="w-8 h-8" stroke="white" fill="white" />
      </div>
    </div>
  )
}