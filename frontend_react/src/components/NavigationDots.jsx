const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "testimonial", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#6F3FF5" } : {}}
          aria-label={`Go to ${item} section`}
        />
      )
    )}
  </div>
);

export default NavigationDots;
