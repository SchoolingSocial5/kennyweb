'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { serviceStore, Service } from '@/lib/stores/ServiceStore';
import { HiPlus, HiTrash, HiPencil, HiVideoCamera, HiClock, HiTag } from 'react-icons/hi';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    picture: '',
    youtubeUrl: '',
    description: '',
    minPrice: 0,
    maxPrice: 0,
    maxDuration: '',
  });

  const quillModules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'clean'],
    ],
  }), []);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const data = await serviceStore.getServices();
    setServices(data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService?._id) {
      await serviceStore.updateService(editingService._id, formData);
    } else {
      await serviceStore.createService(formData as Service);
    }
    setShowModal(false);
    setEditingService(null);
    setFormData({
      title: '',
      picture: '',
      youtubeUrl: '',
      description: '',
      minPrice: 0,
      maxPrice: 0,
      maxDuration: '',
    });
    fetchServices();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      await serviceStore.deleteService(id);
      fetchServices();
    }
  };

  const openEdit = (service: Service) => {
    setEditingService(service);
    setFormData(service);
    setShowModal(true);
  };

  if (loading) return <div className="p-8 text-center">Loading services...</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Services Management</h1>
          <p className="text-slate-500 font-medium">Manage the core services offered by Kenny Tech Studios.</p>
        </div>
        <button
          onClick={() => {
            setEditingService(null);
            setFormData({ title: '', picture: '', youtubeUrl: '', description: '', minPrice: 0, maxPrice: 0, maxDuration: '' });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
        >
          <HiPlus className="text-xl" />
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service._id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-48 w-full bg-slate-100">
              {service.picture && (
                <Image
                  src={service.picture}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEdit(service)}
                  className="p-2 bg-white text-primary rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all"
                >
                  <HiPencil />
                </button>
                <button
                  onClick={() => handleDelete(service._id!)}
                  className="p-2 bg-white text-red-500 rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition-all"
                >
                  <HiTrash />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <div 
                  className="text-slate-500 text-sm line-clamp-3 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <HiTag className="text-primary" />
                  ${service.minPrice} - ${service.maxPrice}
                </div>
                <div className="flex items-center gap-1.5">
                  <HiClock className="text-primary" />
                  {service.maxDuration}
                </div>
                {service.youtubeUrl && (
                  <div className="flex items-center gap-1.5 text-red-500">
                    <HiVideoCamera />
                    Video Link
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="px-8 py-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-black text-slate-900">{editingService ? 'Edit Service' : 'Add New Service'}</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <HiPlus className="text-3xl rotate-45" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Image URL</label>
                  <input
                    type="text"
                    required
                    value={formData.picture}
                    onChange={(e) => setFormData({ ...formData, picture: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Min Price ($)</label>
                  <input
                    type="number"
                    required
                    value={formData.minPrice}
                    onChange={(e) => setFormData({ ...formData, minPrice: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Max Price ($)</label>
                  <input
                    type="number"
                    required
                    value={formData.maxPrice}
                    onChange={(e) => setFormData({ ...formData, maxPrice: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Max Duration</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2 weeks"
                    value={formData.maxDuration}
                    onChange={(e) => setFormData({ ...formData, maxDuration: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">YouTube Video URL (Optional)</label>
                  <input
                    type="text"
                    value={formData.youtubeUrl}
                    onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Description (Rich Text)</label>
                <div className="quill-wrapper">
                  <ReactQuill
                    theme="snow"
                    value={formData.description}
                    onChange={(content) => setFormData({ ...formData, description: content })}
                    modules={quillModules}
                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
                  />
                </div>
              </div>
              <div className="pt-4 flex gap-4 flex-shrink-0">
                <button type="submit" className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                  {editingService ? 'Update Service' : 'Create Service'}
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .quill-wrapper .ql-container {
          min-height: 200px;
          font-family: inherit;
          font-size: 0.95rem;
          border: none !important;
        }
        .quill-wrapper .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}

