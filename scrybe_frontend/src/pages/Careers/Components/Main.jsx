import Hero from "../Assets/image-2.jpg";
import Banner from "./Banner";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import style from '../Style/main.module.scss'
function Main() {
  return (
    <div className={style.main_container}>
      <NavBar />
      <Banner />
      <div className={style.careers}>
        <div className={style.text_container}>
          <h1>Careers at scrybe</h1>
          <p>
            We’re committed to hiring and supporting the growth of all Scrybers.
            We’re focused, ambitious, and we care about our work and each other.
            We believe the future is ours to create.
          </p>
          <p>
            {" "}
            Explore remotefriendly, flexible opportunities and join our mission
            to make work life simpler, more pleasant and more productive.
          </p>
          <button className={style.careers_button}>Learn More</button>
        </div>
        <div className={style.img_container}>
          <img className={style.careers_img} src={Hero} alt="" />
        </div>
      </div>
      <div className={style.our_promise_container}>
        <div className={style.our_promise}>
          <h1 className={style.our_promise_heading}>Our Promise</h1>
          <div className={style.promises}>
            <div className={style.promise}>
              <h1>Meaningful work</h1>
              <p>
                We are all about work that is truly impactful and adds a sense
                of value and purpose to our team players.
              </p>
            </div>
            <div className={style.promise}>
              <h1>Dynamic environment</h1>
              <p>
                {" "}
                Diversity and inclusiveness is one of our goals. We are open to
                talents from diverse parts of the world..
              </p>
            </div>
            <div className={style.promise}>
              <h1>Career opportunities</h1>
              <p>
                {" "}
                We empower all Scrybers to grow and expand their skills by
                availing them with limitless possibilities.
              </p>
            </div>
            <div className={style.promise}>
              <h1>Growing together</h1>
              <p>
                We dream big and work together at solving problems. We also
                never forget to have fun.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.currently_hiring}>
        <h1 className={style.currently_hiring_heading}>Currently Hiring</h1>
        <div className={style.currently_hiring_container}>
          <div className={style.currently_hiring_grid}>
            <h1>Product Designer</h1>
            <p>
              Our design team is currently looking to welcome dedicated and
              brilliant Product design interns to our workforce.
            </p>
            <div className="see-more-link">
              <a href="/">See more</a>
            </div>
          </div>
          <div className={`${style.currently_hiring_grid} ${style.mid_grid}`}>
            <h1>DevOps Engineer</h1>
            <p>
              Our DevOps team is currently looking to welcome dedicated and
              brilliant DevOps interns to our community.
            </p>
            <div className={style.see_more_link}>
              <a href="#">See more</a>
            </div>
          </div>
          <div className={style.currently_hiring_grid}>
            <h1>Front End Engineer</h1>
            <p>
              Our Engineering team is currently looking to welcome experienced,
              dedicated and brilliant FE developers.
            </p>
            <div className={style.see_more_link}>
              <a href="#">See more</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
