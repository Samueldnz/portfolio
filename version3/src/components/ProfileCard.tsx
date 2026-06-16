import profileImage from "@/assets/samuel-profile.jpg";

interface ProfileCardProps {
  name: string;
  role: string;
}

export function ProfileCard({
  name,
  role,
}: ProfileCardProps) {
  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        items-center
        gap-4

        bg-[var(--color-paper)]
        rounded-2xl
        p-4

        shadow-lg
        transition-all
        hover:-translate-y-1
      "
    >
      <img
        src={profileImage}
        alt={name}
        className="
          w-24
          h-24
          rounded-full
          object-cover
        "
      />

      <div>
        <h3 className="font-bold text-lg">
          {name}
        </h3>

        <p
          className="
            text-sm
            text-[var(--color-muted)]
          "
        >
          {role}
        </p>
      </div>
    </div>
  );
}