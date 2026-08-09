import React from 'react';

const LabCard = ({ lab }) => (
    <div className="lab-card" data-aos="fade-up">
        <div className="lab-card-header">
            <h3>{lab.title}</h3>
            {lab.difficulty && <span className="lab-badge">{lab.difficulty}</span>}
        </div>

        <p className="lab-description">{lab.description}</p>

        <div className="lab-meta">
            {lab.platform && <span><i className="bi bi-hdd-network me-1"></i>{lab.platform}</span>}
            {lab.date && <span><i className="bi bi-calendar3 me-1"></i>{lab.date}</span>}
        </div>

        {(lab.skills?.length > 0 || lab.tools?.length > 0) && (
            <div className="lab-chip-row">
                {lab.skills?.map((s) => <span className="lab-chip" key={s}>{s}</span>)}
                {lab.tools?.map((t) => <span className="lab-chip" key={t}>{t}</span>)}
            </div>
        )}

        {lab.whatILearned && (
            <div className="lab-learned">
                <strong>What I learned</strong>
                {lab.whatILearned}
            </div>
        )}

        {(lab.writeUpLink || lab.evidenceImage) && (
            <div className="d-flex gap-3 mt-2">
                {lab.writeUpLink && (
                    <a href={lab.writeUpLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: 'var(--accent-color)' }}>
                        <i className="bi bi-file-text me-1"></i>Write-up
                    </a>
                )}
            </div>
        )}
    </div>
);

export default LabCard;
