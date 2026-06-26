"use client";
import Image from "next/image";
import "./CertificationCard.css";
import { Fade } from "@/components/Fade";

const CertificationCard = ({ certificate }) => {
	return (
		<Fade bottom duration={1000} distance="20px">
			<div className="cert-card">
				<div className="content">
					<a
						href={certificate.certificate_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="content-overlay"></div>
						<div
							className="cert-header"
							style={{ backgroundColor: certificate.color_code }}
						>
							<Image
								className="logo_img"
								src={`/images/${certificate.logo_path}`}
								alt={certificate.alt_name}
								width={160}
								height={100}
							/>
						</div>
						<div className="content-details fadeIn-top">
							<h3 className="content-title">Certificate</h3>
						</div>
					</a>
				</div>
				<div className="cert-body">
					<h2 className="cert-body-title">{certificate.title}</h2>
					<h3 className="cert-body-subtitle">{certificate.subtitle}</h3>
				</div>
			</div>
		</Fade>
	);
};

export default CertificationCard;
