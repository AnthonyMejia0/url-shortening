function StatCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-white text-center xl:text-left w-[22rem] h-[16rem] md:w-[19.75rem] md:h-[13rem] p-8 lg:px-[1.5rem] pt-16 md:pt-14">
      <div className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-dark-violet w-[4rem] aspect-square">
        <img className="w-[50%]" src={icon} alt="Brand Recognition" />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray mt-3 md:mt-1 md:text-sm">{description}</p>
    </div>
  );
}

export default StatCard;
