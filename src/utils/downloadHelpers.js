/**
 * Download helpers for Digital Wedding App
 */

// 1. Download High-Resolution Wedding Card
export function downloadInvitationCard() {
  const link = document.createElement('a');
  link.href = '/assets/invitation-card.jpg';
  link.download = 'Hamza-Nawaz-and-Laiba-Waheed-Walima-Invitation.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 2. Download Calendar Event (.ics)
export function downloadCalendarIcs() {
  const event = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Hamza & Laiba//Walima Ceremony//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:walima-hamza-laiba-20261206@weddingapp.pk',
    'DTSTAMP:20260928T000000Z',
    'DTSTART:20261206T140000Z', // 7:00 PM PKT (UTC+5) = 14:00 UTC
    'DTEND:20261206T180000Z',   // 11:00 PM PKT = 18:00 UTC
    'SUMMARY:Walima Ceremony: Hamza Nawaz & Laiba Waheed',
    'DESCRIPTION:You are cordially invited to celebrate the Walima Ceremony of Hamza Nawaz & Laiba Waheed.\\nVenue: Hotel Dua Event Marriage Hall, Poonch Road, Samanabad, Lahore, Pakistan.\\nTime: 7:00 PM PKT.',
    'LOCATION:Hotel Dua Event Marriage Hall, Poonch Road, Samanabad, Lahore, Pakistan',
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Walima-Hamza-and-Laiba.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 3. Open in Google Calendar
export function openGoogleCalendar() {
  const title = encodeURIComponent('Walima Ceremony: Hamza Nawaz & Laiba Waheed');
  const details = encodeURIComponent('You are warmly invited to the Walima reception of Hamza Nawaz & Laiba Waheed at Hotel Dua Event Marriage Hall, Poonch Road, Samanabad, Lahore.');
  const location = encodeURIComponent('Hotel Dua Event Marriage Hall, Poonch Road, Samanabad, Lahore, Pakistan');
  // 6 Dec 2026 19:00 PKT (UTC+5 -> 14:00 UTC) to 23:00 PKT (18:00 UTC)
  const dates = '20261206T140000Z/20261206T180000Z';
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  window.open(url, '_blank');
}

// 4. Download RSVP Guest List as CSV
export function downloadRsvpCsv(rsvpList) {
  if (!rsvpList || rsvpList.length === 0) {
    alert('No RSVP entries yet to download.');
    return;
  }

  const headers = ['Name', 'Phone / WhatsApp', 'Attending Status', 'Guest Count', 'Message / Du\'a', 'Timestamp'];
  const rows = rsvpList.map(item => [
    `"${(item.name || '').replace(/"/g, '""')}"`,
    `"${(item.phone || '').replace(/"/g, '""')}"`,
    `"${(item.attending || '').replace(/"/g, '""')}"`,
    item.guests || 1,
    `"${(item.message || '').replace(/"/g, '""')}"`,
    `"${item.date || new Date().toLocaleDateString()}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `Walima-RSVP-Guest-List-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 5. Copy text to clipboard
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
}
