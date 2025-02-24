const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl tracking-tight font-bold leading-none sm:text-6xl">
          Welcome to
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        {" "}
        Comfy is your go-to destination for stylish, high-quality furniture that
        transforms any space into a cozy and elegant retreat. Whether you're
        looking for plush sofas, modern dining sets, functional office desks, or
        luxurious bedroom essentials, we have a wide variety of designs to suit
        every taste and lifestyle. Our collection includes living room furniture
        like sectional sofas, coffee tables, and TV stands, dining room sets
        ranging from classic to contemporary styles, and bedroom essentials such
        as beds, nightstands, and wardrobes designed for ultimate relaxation. We
        also offer home office solutions, including ergonomic desks and chairs,
        as well as outdoor furniture that brings comfort and style to your patio
        or garden. At Comfy, we believe that furniture should be more than just
        functional—it should enhance your home and reflect your personality.
        With a focus on quality materials, craftsmanship, and affordability, we
        make it easy to furnish your space without compromising on comfort or
        style. Explore our collection today and bring the perfect blend of
        coziness and sophistication to your home!{" "}
      </p>
    </>
  );
};
export default About;
