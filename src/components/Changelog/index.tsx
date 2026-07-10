import React from 'react';
import styles from './styles.module.css';

type Entry = {
  version: string;
  date: string;
  sections: { type: 'Added' | 'Changed' | 'Fixed' | 'Removed'; items: string[] }[];
};

const BADGE: Record<string, string> = {
  Added: styles.added,
  Changed: styles.changed,
  Fixed: styles.fixed,
  Removed: styles.removed,
};

const LABEL: Record<string, string> = {
  Added: 'Added',
  Changed: 'Changed',
  Fixed: 'Fixed',
  Removed: 'Removed',
};

export default function Changelog({ entries }: { entries: Entry[] }) {
  return (
    <div className={styles.timeline}>
      {entries.map((entry) => (
        <div key={entry.version} className={styles.entry}>
          <div className={styles.dot} />
          <div className={styles.card}>
            <div className={styles.header}>
              <span className={styles.version}>{entry.version}</span>
              <span className={styles.date}>{entry.date}</span>
            </div>
            {entry.sections.map((section) => (
              <div key={section.type} className={styles.section}>
                <span className={`${styles.badge} ${BADGE[section.type] ?? ''}`}>
                  {LABEL[section.type]}
                </span>
                <ul className={styles.list}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
