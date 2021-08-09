import { bootstrap } from "bootstrap";
import { popper } from "@popperjs/core";
import "./index.scss";

// Tooltip
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
console.log("Hello World!");
