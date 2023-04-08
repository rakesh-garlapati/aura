<aura:application extends="force:slds">
<lightning:layout multipleRows="true">
<lightning:layoutItem size="12">
<c:aura_1_lightningButton/>
</lightning:layoutItem>
</lightning:layout>

<lightning:layoutItem size="6">
<lightning:accordion activeSectionName="E">
        <lightning:accordionSection name="A" label="Accordion Title A">
        <c:aura_1_dataHandle/>
        </lightning:accordionSection>

        <lightning:accordionSection name="B" label="Accordion Title B">
        <c:aura_1_input/>
        </lightning:accordionSection>

        <lightning:accordionSection name="C" label="Accordion Title C">
        <c:aura_1_calculator/>
        </lightning:accordionSection>
        <lightning:accordionSection name="D" label="Accordion Title D">
        <c:aura_1_auraId/>
        </lightning:accordionSection>
        <lightning:accordionSection name="E" label="Accordion Title E">
        <c:aura_1_auraif/>
        </lightning:accordionSection>


</lightning:accordion>
</lightning:layoutItem>

</aura:application>	
