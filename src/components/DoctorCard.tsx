interface DoctorCardProps {
  name: string;
  specialty: string;
  description: string;
  image: string;
}

const DoctorCard = ({ name, specialty, description, image }: DoctorCardProps) => {
  return (
    <div className="bg-card border rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-smooth">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{specialty}</p>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex gap-2 mt-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer">
            <i className="fas fa-user-md"></i>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer">
            <i className="fas fa-award"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
