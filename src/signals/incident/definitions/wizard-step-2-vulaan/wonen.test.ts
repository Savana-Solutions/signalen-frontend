import wonen from './wonen'

describe('definition wonen', () => {
  it('has a defined set of controls', () => {
    const keys = Object.keys(wonen)

    expect(keys).toStrictEqual([
      'locatie',
      'wonen_overig',
      'leegstand_dateTime',
      'extra_wonen_leegstand_periode',
      'extra_wonen_leegstand_woning_gebruik',
      'extra_wonen_leegstand_activiteit_in_woning',
      'extra_wonen_leegstand_iemand_aanwezig',
      'onderhuur_dateTime',
      'extra_wonen_onderhuur_aantal_personen',
      'extra_wonen_onderhuur_bewoners_familie',
      'extra_wonen_onderhuur_woon_periode',
      'extra_wonen_onderhuur_iemand_aanwezig',
      'extra_wonen_onderhuur_huurder_woont',
      'extra_wonen_onderhuur_adres_huurder',
      'vakantieverhuur_dateTime',
      'extra_wonen_vakantieverhuur_toeristen_aanwezig',
      'extra_wonen_vakantieverhuur_aantal_mensen',
      'extra_wonen_vakantieverhuur_hoe_vaak',
      'extra_wonen_vakantieverhuur_wanneer',
      'extra_wonen_vakantieverhuur_bewoning',
      'extra_wonen_vakantieverhuur_online_aangeboden',
      'extra_wonen_vakantieverhuur_link_advertentie',
      'extra_wonen_vakantieverhuur_footer',
      'extra_wonen_verhuurderschap_onderwerp',
      'extra_wonen_verhuurderschap_onderwerp_overige',
      'extra_wonen_verhuurderschap_discriminatie_title',
      'extra_wonen_verhuurderschap_discriminatie',
      'extra_wonen_verhuurderschap_discriminatie_anders',
      'extra_wonen_verhuurderschap_discriminatie_bewijs',
      'extra_wonen_verhuurderschap_intimidatie_title',
      'extra_wonen_verhuurderschap_intimidatie_toelichting',
      'extra_wonen_verhuurderschap_intimidatie_bewijs',
      'extra_wonen_verhuurderschap_huurcontract_title',
      'extra_wonen_verhuurderschap_huurcontract',
      'extra_wonen_verhuurderschap_huurcontract_borg_hoogte',
      'extra_wonen_verhuurderschap_huurcontract_borg_termijn',
      'extra_wonen_verhuurderschap_huurcontract_toelichting',
      'extra_wonen_verhuurderschap_huurcontract_bewijs',
      'extra_wonen_verhuurderschap_bemiddelingskosten_title',
      'extra_wonen_verhuurderschap_bemiddelingskosten',
      'extra_wonen_verhuurderschap_bemiddelingskosten_ja',
      'extra_wonen_verhuurderschap_bemiddelingskosten_bewijs',
      'extra_wonen_verhuurderschap_servicekosten_title',
      'extra_wonen_verhuurderschap_servicekosten_kostenspecificatie',
      'extra_wonen_verhuurderschap_servicekosten_jaarlijkse_afrekening',
      'extra_wonen_verhuurderschap_servicekosten_hoogte',
      'extra_wonen_verhuurderschap_servicekosten_toelichting_ja',
      'extra_wonen_verhuurderschap_huur_probleem_title',
      'extra_wonen_verhuurderschap_huur_probleem_onderwerp',
      'extra_wonen_verhuurderschap_afsluitende_vragen_title',
      'extra_wonen_verhuurderschap_arbeidsmigrant',
      'extra_wonen_verhuurderschap_arbeidsmigrant_huurcontract',
      'extra_wonen_verhuurderschap_arbeidsmigrant_huurcontract_taal',
      'extra_wonen_verhuurderschap_arbeidsmigrant_arbeidscontract',
      'extra_wonen_verhuurderschap_consent',
      'extra_wonen_verhuurderschap_info',
      'woningdelen_dateTime',
      'extra_wonen_woningdelen_vermoeden',
      'extra_wonen_woningdelen_eigenaar',
      'extra_wonen_woningdelen_weet_eigenaar',
      'extra_wonen_woningdelen_hoe_weet_eigenaar',
      'extra_wonen_woningdelen_adres_huurder',
      'extra_wonen_woningdelen_aantal_personen',
      'extra_wonen_criminele_bewoning_bewoners_familie',
      'extra_wonen_criminele_bewoning_samenwonen',
      'extra_wonen_woningdelen_wisselende_bewoners',
      'extra_wonen_woningdelen_iemand_aanwezig',
      'extra_wonen_woningdelen_overlast',
      'extra_wonen_woningdelen_overlast_omschrijven',
      'extra_wonen_woningdelen_overlast_info',
      'extra_wonen_woonkwaliteit_direct_gevaar',
      'extra_wonen_woonkwaliteit_direct_gevaar_alert',
      'extra_wonen_woonkwaliteit_gemeld_bij_eigenaar',
      'extra_wonen_woonkwaliteit_direct_gevaar_ja',
    ])
  })
})
