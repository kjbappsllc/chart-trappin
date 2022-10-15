import { FacebookIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from '../../../shared/ui/icons';

export const Footer = () => {
  return (
    <div className="bg-primary-400 flex py-4">
      <div className="text-center container flex justify-center flex-col items-center mx-auto mt-8">
        <div className="flex justify-center space-x-6">
          <FacebookIcon className="w-6 h-6" stroke="white" fill="white" />
          <YouTubeIcon className="w-6 h-6" stroke="white" fill="white" />
          <LinkedInIcon className="w-6 h-6" stroke="white" fill="white" />
          <TwitterIcon className="w-6 h-6" stroke="white" fill="white" />
        </div>
        <div className="text-white hover:underline mt-8 text-sm">
          <a href="https://www.linkedin.com/in/keyshawn-butts/" target="_blank" rel="noopener noreferrer">
            © Copyright {new Date().getFullYear()} ChartTrappin. Powered by Kjbappsllc
          </a>
        </div>
      </div>
    </div>
  );
};
