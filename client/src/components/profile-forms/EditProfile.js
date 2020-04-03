import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { createProfile, getCurrentProfile } from '../../actions/profile'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const EditProfile = ({
  profile: { profile, loading }, 
  createProfile, 
  getCurrentProfile, 
  history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInput] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading, getCurrentProfile]); 

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
        Edit Your Profile
      </h1>
      <p className="lead">
        <FontAwesomeIcon icon={ faUser } />{' '}
        Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select 
            name="status" 
            value={status}
            onChange={e => onChange(e)} 
          >
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Company" 
            name="company" 
            value={ company }
            onChange={e => onChange(e)} 
          />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Website" 
            name="website"
            value={ website }
            onChange={e => onChange(e)} 
          />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Location" 
            name="location"
            value={ location }
            onChange={e => onChange(e)} 
          />
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="* Skills" 
            name="skills"
            value={ skills }
            onChange={e => onChange(e)} 
          />
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={ githubusername }
            onChange={e => onChange(e)}
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div>
        <div className="form-group">
          <textarea 
            placeholder="A short bio of yourself" 
            name="bio"
            value={ bio }
            onChange={e => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInput(!displaySocialInputs )} type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs &&  <Fragment>
          <div className="form-group social-input">
            <FontAwesomeIcon 
              icon={faTwitter} 
              size="2x" 
              color="#38A1F3" 
              style={{ marginRight: "10px", position: "absolute" }}
            />
            <input 
              type="text" 
              placeholder="Twitter URL" 
              name="twitter"
              style={{ marginLeft: "50px" }}
              value={ twitter }
              onChange={e => onChange(e)}
            />
          </div>

          <div className="form-group social-input">
            <FontAwesomeIcon 
              icon={faFacebook} 
              size="2x" 
              color="#3b5998" 
              style={{ marginRight: "10px", position: "absolute" }}
            />
            <input 
              type="text" 
              placeholder="Facebook URL" 
              name="facebook"
              style={{ marginLeft: "50px" }}
              value={ facebook }
              onChange={e => onChange(e)} 
            />
          </div>

          <div className="form-group social-input">
            <FontAwesomeIcon 
              icon={faYoutube} 
              size="2x" 
              color="#ff0000" 
              style={{ marginRight: "10px", position: "absolute" }}
            />
            <input 
              type="text" 
              placeholder="YouTube URL" 
              name="youtube"
              style={{ marginLeft: "50px" }}
              value={ youtube }
              onChange={e => onChange(e)} 
            />
          </div>

          <div className="form-group social-input">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="2x" 
              color="#0e76a8" 
              style={{ marginRight: "10px", position: "absolute" }}
            />
            <input 
              type="text" 
              placeholder="Linkedin URL" 
              name="linkedin"
              style={{ marginLeft: "50px" }}
              value={ linkedin }
              onChange={e => onChange(e)} 
            />
          </div>

          <div className="form-group social-input">
            <FontAwesomeIcon 
              icon={faInstagram} 
              size="2x" 
              color="black" 
              style={{ marginRight: "10px", position: "absolute" }}
            />
            <input 
              type="text" 
              placeholder="Instagram URL" 
              name="instagram"
              style={{ marginLeft: "50px" }}
              value={ instagram }
              onChange={e => onChange(e)}
            />
          </div>
        </Fragment>}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile })
  (withRouter(EditProfile));