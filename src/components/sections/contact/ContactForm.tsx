"use client";

import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { contactPageContent } from '@/lib/content';

const ContactForm = () => {
    const [messageLength, setMessageLength] = useState(0);
    const { title, fields, submitButton } = contactPageContent.form;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{title}</h3>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">{fields.name.label}</label>
                    <input id="name" required className="form-input" placeholder={fields.name.placeholder} type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">{fields.email.label}</label>
                    <input id="email" required className="form-input" placeholder={fields.email.placeholder} type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">{fields.subject.label}</label>
                    <div className="relative">
                        <select id="subject" name="subject" required className="form-input appearance-none bg-white cursor-pointer pr-8">
                            <option value="">{fields.subject.placeholder}</option>
                            {fields.subject.options.map(option => (
                                <option key={option} value={option.toLowerCase().replace(' ', '-')}>{option}</option>
                            ))}
                        </select>
                        <RiArrowDownSLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">{fields.message.label}</label>
                    <textarea
                        id="message" name="message" required maxLength={2000} rows={5}
                        className="form-input resize-none"
                        placeholder={fields.message.placeholder}
                        onChange={(e) => setMessageLength(e.target.value.length)}
                    ></textarea>
                    <div className="text-right text-xs text-slate-500 mt-1">{messageLength}/2000</div>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-lg hover:bg-amber-600 ...">
                    {submitButton}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
