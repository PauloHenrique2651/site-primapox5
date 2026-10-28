import { socialProfiles } from "@/data/site";

// Renders nothing until the official profiles are filled in data/site.ts.
export function SocialLinks({ className }: { className?: string }) {
  if (!socialProfiles.length) return null;
  return (
    <ul className={className} aria-label="Redes sociais da Primapox">
      {socialProfiles.map((profile) => (
        <li key={profile.url}><a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.network}</a></li>
      ))}
    </ul>
  );
}
