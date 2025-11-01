interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card border rounded-xl p-6 shadow-soft hover:shadow-card transition-smooth">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fas fa-star ${
              i < rating ? "text-accent" : "text-muted"
            }`}
          ></i>
        ))}
      </div>
      <p className="text-muted-foreground italic mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <i className="fas fa-user text-primary"></i>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">Verified Patient</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
