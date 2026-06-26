"use client";
import "./Certifications.css";
import { Fade } from "@/components/Fade";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { certifications } from "../../portfolio";

export default function Certifications() {
	return (
		<Fade bottom duration={1000} distance="20px">
			<div className="main" id="certs">
				<h1 className="cert-header-title">Certifications</h1>
				<div className="cert-main-div">
					<div className="cert-text-div">
						{certifications.certifications.map((cert) => {
							return (
								<CertificationCard key={cert.alt_name} certificate={cert} />
							);
						})}
					</div>
				</div>
			</div>
		</Fade>
	);
}
