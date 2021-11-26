import React from "react";
import Container from "./styles";

export default function News(props) {
    return (<Container>
        <div id="publication-form">
            <textarea placeholder="Écrivez quelque chose !"></textarea>
            <div>
                <button
                    className="btn btn-success w-100 m-1"
                    type="button"
                    onClick={() => { }}
                >
                    Publier
                </button>
                <button
                    className="btn btn-danger w-100 m-1"
                    type="button"
                    onClick={() => { }}
                >
                    Effacer
                </button>
            </div>
        </div>
        <ul id="publications">
            {props.publications.map((publication, index) => (
                <li className="publication">
                    <div className="publication-header">
                        {/* Nom de la personne + date de publication */}
                    </div>
                    <p className="publication-body">
                        {publication.content}
                    </p>
                    <div className="publication-footer">
                        <button
                            className="btn btn-outline-success m-1"
                            type="button"
                            onClick={() => }
                        >
                            Commenter
                        </button>
                        <button
                            className="btn btn-outline-danger m-1"
                            type="button"
                            onClick={() => { }}
                        >
                            Supprimer
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </Container>)
};