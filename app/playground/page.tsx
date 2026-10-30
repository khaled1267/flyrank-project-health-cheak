
"use client";

import { useState } from "react";

import Modal from "../../playground/Modal";
import Tabs from "../../playground/Tabs";
import Disclosure from "../../playground/Disclosure";

import "@/playground/playground.css";

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabItems = [
    {
      label: "Profile",
      content: (
        <div>
          <h3>Welcome to your Profile</h3>
          <p>Manage your personal information and profile details.</p>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div>
          <h3>Account Settings</h3>
          <p>Customize your preferences and application settings.</p>
        </div>
      ),
    },
    {
      label: "About",
      content: (
        <div>
          <h3>About This Project</h3>
          <p>Three accessible components built using React and TypeScript.</p>
        </div>
      ),
    },
  ];

  return (
    <main className="playground-page">
      <div className="playground-container">

        <header className="playground-hero">
          <p className="hero-kicker">
            FLYRANK · ACCESSIBILITY LAB
          </p>

          <h1>
            Accessible Components
            <br />
            <span>Playground.</span>
          </h1>

          <p className="hero-description">
            Three interactive components. Built from scratch.
            Designed with accessibility and keyboard interaction in mind.
          </p>
        </header>

        <div className="demo-grid">

          <section className="demo-card">
            <div className="demo-card-header">
              <span className="demo-number">01 / DIALOG</span>
              <h2>Modal Dialog</h2>
              <p className="demo-description">
                A focused dialog with keyboard controls and focus management.
              </p>
            </div>

            <button
              type="button"
              className="demo-button demo-button--primary"
              onClick={() => setIsModalOpen(true)}
            >
              Open Modal
            </button>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <p>
                This is an accessible modal dialog. You can interact
                with the elements below.
              </p>

              <input
                className="modal-input"
                type="text"
                placeholder="Enter your name"
                aria-label="Your name"
              />

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Save Changes
              </button>
            </Modal>
          </section>

          <section className="demo-card">
            <div className="demo-card-header">
              <span className="demo-number">02 / NAVIGATION</span>
              <h2>Interactive Tabs</h2>
              <p className="demo-description">
                Switch between content using buttons and arrow keys.
              </p>
            </div>

            <Tabs items={tabItems} />
          </section>

          <section className="demo-card demo-card--full">
            <div className="demo-card-header">
              <span className="demo-number">03 / EXPANDABLE CONTENT</span>
              <h2>Disclosure</h2>
              <p className="demo-description">
                Expand or collapse additional information with keyboard or mouse.
              </p>
            </div>

            <Disclosure title="What is Web Accessibility?">
              <p>
                Web accessibility means designing and developing websites
                so that everyone can use them, including people who use
                keyboards, screen readers, and other assistive technologies.
              </p>
            </Disclosure>
          </section>

        </div>

        <footer className="playground-footer">
          Built with React · TypeScript · Accessibility First
        </footer>

      </div>
    </main>
  );
}
