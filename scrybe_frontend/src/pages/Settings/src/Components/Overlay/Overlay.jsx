import React from "react";
import { Link } from "react-router-dom";
import OverlayCss from "./overlay.module.scss";

const Overlay = ({ setShowModal }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className={OverlayCss.wrapper}>
			<div className={OverlayCss.false} onClick={setShowModal}></div>
			<div className={OverlayCss.overlay}>
				<div className={OverlayCss.overlayContent}>
					<div className={OverlayCss.overlayHeader}>
						<h2>Are you sure you want to delete your account?</h2>
						<p>
							To proceed, type <strong>DELETE</strong> the input field below
						</p>
					</div>

					<form className={OverlayCss.form} action="">
						<div className={OverlayCss.inputGroup}>
							<span className={OverlayCss.inputError}></span>
							<input type="text" className={OverlayCss.input} />
						</div>
						<p className={OverlayCss.caution}>
							Take note that our system will not save any of your data when your account is deleted.
						</p>
						<div className={OverlayCss.submit}>
							<button onClick={() => handleSubmit()} type="submit">
								Delete
							</button>
							<p className={OverlayCss.redirect} onClick={setShowModal}>
								Don't Delete
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Overlay;
