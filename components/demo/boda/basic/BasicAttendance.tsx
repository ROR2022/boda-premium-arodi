"use client"

import { useState } from 'react'
import { Users, CheckCircle, XCircle, MessageCircle } from 'lucide-react'
import { basicDemoData } from './data/basic-demo-data'

export function BasicAttendance() {
  const [formData, setFormData] = useState({
    name: '',
    response: '',
    companions: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formatear mensaje para WhatsApp
    const message = formatWhatsAppMessage(formData)
    
    // Enviar por WhatsApp
    sendWhatsAppMessage(message)
    
    // Mostrar confirmación
    setIsSubmitted(true)
  }

  const formatWhatsAppMessage = (data: typeof formData) => {
    const attendanceStatus = data.response === 'yes' ? '✅ SÍ ASISTIRÉ' : '❌ NO PODRÉ ASISTIR'
    const companionsText = data.response === 'yes' && data.companions 
      ? `\n👥 *Acompañantes:* ${data.companions}` 
      : ''
    
    return `🎊 *CONFIRMACIÓN DE ASISTENCIA - BODA VERO & ARODI* 🎊

👤 *Nombre:* ${data.name}
📞 *Teléfono:* ${data.phone}
💒 *Asistencia:* ${attendanceStatus}${companionsText}

📅 *Fecha:* Sábado 4 de Octubre 2025
⛪ *Ceremonia:* 13:00 hrs - Casa de oración
🎉 *Recepción:* 18:30 hrs - La Altanera

¡Gracias por confirmar! 💕`
  }

  const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = '5233238241535' // +52 33 2382 4153 (formato internacional sin + y espacios)
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {basicDemoData.attendance.title}
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            {basicDemoData.attendance.message}
          </p>
          <p className="text-gray-600">
            {basicDemoData.attendance.subtitle}
          </p>
        </div>

        {/* Demo Info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 text-green-700">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Integración WhatsApp Activa</span>
          </div>
          <p className="text-green-600 text-sm mt-1">
            Las confirmaciones se enviarán automáticamente al: +52 33 2382 4153
          </p>
        </div>

        {/* Formulario */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Nombre */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {basicDemoData.attendance.fields.name}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: María González"
                required
              />
            </div>

            {/* Respuesta */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {basicDemoData.attendance.fields.response}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleInputChange('response', 'yes')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.response === 'yes'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>{basicDemoData.attendance.fields.responseOptions.yes}</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => handleInputChange('response', 'no')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.response === 'no'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-red-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5" />
                    <span>{basicDemoData.attendance.fields.responseOptions.no}</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Acompañantes */}
            {formData.response === 'yes' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {basicDemoData.attendance.fields.companions}
                </label>
                <input
                  type="text"
                  value={formData.companions}
                  onChange={(e) => handleInputChange('companions', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: Juan González, Ana López"
                />
              </div>
            )}

            {/* Teléfono */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {basicDemoData.attendance.fields.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: 777 123 4567"
                required
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Confirmar por WhatsApp
            </button>
          </form>
        ) : (
          /* Mensaje de confirmación */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Confirmación Enviada por WhatsApp!
            </h3>
            <p className="text-gray-600 mb-6">
              Tu confirmación de asistencia se ha enviado exitosamente por WhatsApp. 
              ¡Te esperamos en nuestro día especial! 💕
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', response: '', companions: '', phone: '' })
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Confirmar Otro Invitado
            </button>
          </div>
        )}

        
      </div>
    </section>
  )
} 