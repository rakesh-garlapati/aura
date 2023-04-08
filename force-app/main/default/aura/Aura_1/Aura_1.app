<aura:application extends="force:slds">
<lightning:layout multipleRows="true">
<lightning:layoutItem size="12">
<c:aura_1_lightningButton/>
</lightning:layoutItem>
</lightning:layout>


<lightning:accordion activeSectionName="B">
        <lightning:accordionSection name="A" label="Accordion Title A">
        <c:aura_1_dataHandle/>
        </lightning:accordionSection>

        <lightning:accordionSection name="B" label="Accordion Title B">
        <c:aura_1_input/>
        </lightning:accordionSection>

        <lightning:accordionSection name="C" label="Accordion Title C">
        <c:aura_1_calculator/>
        </lightning:accordionSection>


</lightning:accordion>

</aura:application>	
