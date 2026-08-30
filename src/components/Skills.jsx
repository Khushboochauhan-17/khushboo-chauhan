import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillBadge = ({ name }) => (
  <div style={styles.badgeWrapper}>
    <div style={styles.badgeCircle}>
      <span style={styles.badgeText}>{name}</span>
    </div>
    <p style={styles.badgeName}>{name}</p>
  </div>
);

const Skills = () => {
  const { skills } = portfolioData;

  // Format category names: "webDevelopment" -> "Web Development"
  const formatCategoryName = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <section id="skills" style={styles.skillsSection}>
      
      {/* Banner Section */}
      <div style={styles.bannerContainer}>
        <div style={styles.bannerOverlay}>
          <h2 style={styles.bannerTitle}>Skills and Technologies</h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div style={styles.container}>
        {Object.entries(skills).map(([categoryKey, skillList]) => (
          <div key={categoryKey} style={styles.categoryBlock}>
            <h3 style={styles.categoryTitle}>{formatCategoryName(categoryKey)}</h3>
            
            <div style={styles.badgeRow}>
              {skillList.map((skill, index) => (
                <SkillBadge key={index} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

const styles = {
  skillsSection: {
    backgroundColor: '#ffffff',
    fontFamily: 'var(--font-family)',
    color: '#000624',
    minHeight: '80vh',
    paddingBottom: '80px'
  },
  bannerContainer: {
    width: '100%',
    height: '250px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '60px'
  },
  bannerOverlay: {
    backgroundColor: '#ffffff',
    padding: '20px 40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  },
  bannerTitle: {
    fontSize: '24px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    margin: 0
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '0 20px'
  },
  categoryBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  categoryTitle: {
    fontSize: '18px',
    fontFamily: 'var(--font-headings)',
    color: '#000624',
    marginBottom: '20px',
    textAlign: 'center'
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  badgeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100px'
  },
  badgeCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#f6efe9', /* Matching the beige theme */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.05)',
    marginBottom: '10px'
  },
  badgeText: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#3b6e9c',
    textAlign: 'center',
    padding: '5px'
  },
  badgeName: {
    fontSize: '11px',
    color: '#555',
    textAlign: 'center'
  }
};

export default Skills;
