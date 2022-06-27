export default function Badge({ children, size }) {
  const categories = {
    gaming: 'badge-secondary',
    technology: 'badge-info',
    anime: 'badge-accent',
    horror: 'badge-error',
    school: 'badge-warning',
    world: 'badge-primary',
  };
  return (
    <div
      className={`badge badge-${size} ${categories[children]} py-1.5 uppercase`}
    >
      {children}
    </div>
  );
}
