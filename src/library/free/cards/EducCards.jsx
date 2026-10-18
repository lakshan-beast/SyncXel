import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";

// import tutor from "../../../assets/";

export default function EducaCard() {
  const teacherData = [
    {
      name: "Mathematics Faculty Lead",
      subject: "Mathematics Specialist",
      //   img: tutor,
      background:
        "B.Sc. (Physical Science) / Trained Institutional Mathematics Educator.",
      expertise:
        "15+ Years of proven classroom experience in producing outstanding 'A' passes for Ordinary Level Mathematics.",
      approach:
        "Explains difficult geometry and algebra step-by-step using clear logic and fast exam-focused shortcuts.",
      philosophy:
        "We focus on building strong math basics daily, turning exam fear into absolute problem-solving confidence.",
      facebook: "https://facebook.com",
      whatsapp: "...",
      phone: "+9471XXXXXXX",
    },
  ];
  return (
    <div className="teachers-container teachers-grid">
      {teacherData.map((teacher, index) => (
        <div
          className="gap-2.5 bg-white overflow-hidden px-4 py-0 relative flex flex-col text-center rounded-2xl border border-emerald-400"
          key={index}>
          <div className="teacher-image-column">
            {/* <img src={teacher.img} alt={teacher.name} data-aos="zoom-in" /> */}
          </div>

          <div className="teacher-info-column">
            <div className="info-content">
              <span className="subject-tag" data-aos="fade-down">
                {teacher.subject}
              </span>
              <h3 data-aos="fade-right">{teacher.name}</h3>

              <div className="detail-list">
                <div className="detail-header">
                  <p data-aos="fade-right">
                    <b>Academic:</b> <span> {teacher.background}</span>
                  </p>
                  <p data-aos="fade-right">
                    <b>Experience:</b> <span>{teacher.expertise}</span>
                  </p>
                </div>
              </div>

              <div className="teacher-btns">
                <button class="teacher-share-btn">
                  <span>Get in Touch</span>
                  <span>
                    <CiShare1 className="share-icon" />
                  </span>
                  <ul>
                    <li>
                      <a href={`tel:${teacher.facebook}`}>
                        <FaFacebook className="facebook-icon icon" />
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${teacher.whatsapp}`}>
                        <FaWhatsapp className="whatsapp-icon icon" />
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${teacher.phone}`}>
                        <FaPhone className="call-icon icon" />
                      </a>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </section>
  );
}
